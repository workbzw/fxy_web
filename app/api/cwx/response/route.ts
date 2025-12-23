import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * 企业微信回调URL验证接口
 * 文档：https://developer.work.weixin.qq.com/document/10514
 *
 * 企业微信会发送GET请求验证URL有效性，包含参数：
 * - msg_signature: 企业微信加密签名
 * - timestamp: 时间戳
 * - nonce: 随机数
 * - echostr: 加密的随机字符串
 */

// PKCS7 填充相关
const PKCS7 = {
  /**
   * 删除PKCS7填充
   */
  decode(buf: Uint8Array): Uint8Array {
    let pad = buf[buf.length - 1];
    if (pad < 1 || pad > 32) {
      pad = 0;
    }
    return buf.subarray(0, buf.length - pad);
  },

  /**
   * 添加PKCS7填充
   */
  encode(buf: Uint8Array): Buffer {
    const blockSize = 32;
    const padLength = blockSize - (buf.length % blockSize);
    const padBuffer = Buffer.alloc(padLength, padLength);
    return Buffer.concat([buf, padBuffer]);
  },
};

/**
 * 计算签名
 */
function getSignature(
  token: string,
  timestamp: string,
  nonce: string,
  echostr: string
): string {
  const arr = [token, timestamp, nonce, echostr].sort();
  const str = arr.join("");
  return crypto.createHash("sha1").update(str).digest("hex");
}

/**
 * 解密消息
 */
function decrypt(
  encodingAESKey: string,
  echostr: string
): { message: string; corpid: string } {
  // EncodingAESKey 是 Base64 编码的 AES 密钥
  const aesKey = Buffer.from(encodingAESKey + "=", "base64");
  // 取前16字节作为IV
  const iv = aesKey.subarray(0, 16);

  // Base64 解码 echostr
  const encryptedBuffer = Buffer.from(echostr, "base64");

  // AES-256-CBC 解密
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
  decipher.setAutoPadding(false);

  const decryptedRaw = Buffer.concat([
    decipher.update(encryptedBuffer),
    decipher.final(),
  ]);

  // 去除 PKCS7 填充
  const decrypted = Buffer.from(PKCS7.decode(decryptedRaw));

  // 解析消息体
  // 格式: random(16字节) + msg_len(4字节) + msg + corpid
  const msgLen = decrypted.readUInt32BE(16);
  const message = decrypted.subarray(20, 20 + msgLen).toString("utf8");
  const corpid = decrypted.subarray(20 + msgLen).toString("utf8");

  return { message, corpid };
}

/**
 * GET 请求处理 - 验证URL有效性
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // 获取企业微信传递的参数
    const msgSignature = searchParams.get("msg_signature");
    const timestamp = searchParams.get("timestamp");
    const nonce = searchParams.get("nonce");
    const echostr = searchParams.get("echostr");

    // 验证参数是否完整
    if (!msgSignature || !timestamp || !nonce || !echostr) {
      console.error("企业微信验证参数缺失", {
        msgSignature,
        timestamp,
        nonce,
        echostr,
      });
      return new NextResponse("参数缺失", { status: 400 });
    }

    // 从环境变量获取配置
    const token = process.env.WECHAT_CALLBACK_TOKEN;
    const encodingAESKey = process.env.WECHAT_ENCODING_AES_KEY;
    const corpid = process.env.WECHAT_CORPID;

    // 验证配置是否存在
    if (!token || !encodingAESKey || !corpid) {
      console.error("企业微信回调配置缺失", {
        hasToken: !!token,
        hasEncodingAESKey: !!encodingAESKey,
        hasCorpid: !!corpid,
      });
      return new NextResponse("配置缺失", { status: 500 });
    }

    // 计算签名
    const signature = getSignature(token, timestamp, nonce, echostr);

    // 验证签名
    if (signature !== msgSignature) {
      console.error("企业微信签名验证失败", {
        calculated: signature,
        received: msgSignature,
      });
      return new NextResponse("签名验证失败", { status: 403 });
    }

    // 解密 echostr
    const { message, corpid: decryptedCorpid } = decrypt(
      encodingAESKey,
      echostr
    );

    // 验证 corpid
    if (decryptedCorpid !== corpid) {
      console.error("企业微信CorpID验证失败", {
        expected: corpid,
        received: decryptedCorpid,
      });
      return new NextResponse("CorpID验证失败", { status: 403 });
    }

    console.log("企业微信URL验证成功");

    // 返回解密后的 echostr 明文
    return new NextResponse(message, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("企业微信URL验证错误：", error);
    return new NextResponse("验证失败", { status: 500 });
  }
}

/**
 * POST 请求处理 - 接收消息和事件
 * 预留接口，后续可扩展
 */
export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // 获取企业微信传递的参数
    const msgSignature = searchParams.get("msg_signature");
    const timestamp = searchParams.get("timestamp");
    const nonce = searchParams.get("nonce");

    // 验证参数是否完整
    if (!msgSignature || !timestamp || !nonce) {
      console.error("企业微信消息参数缺失");
      return new NextResponse("参数缺失", { status: 400 });
    }

    // 获取请求体
    const body = await request.text();
    console.log("收到企业微信消息：", body);

    // TODO: 解析并处理消息
    // 这里可以扩展处理各种消息和事件

    // 返回成功响应（空响应表示成功接收）
    return new NextResponse("success", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("企业微信消息处理错误：", error);
    return new NextResponse("处理失败", { status: 500 });
  }
}

