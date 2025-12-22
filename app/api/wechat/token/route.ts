import { NextRequest, NextResponse } from "next/server";

// 企业微信 Access Token 响应接口
interface WeChatTokenResponse {
  errcode: number;
  errmsg: string;
  access_token?: string;
  expires_in?: number;
}

export async function GET(request: NextRequest) {
  try {
    // 从环境变量获取企业微信配置
    const corpid = process.env.WECHAT_CORPID;
    const corpsecret = process.env.WECHAT_CORPSECRET;

    // 验证配置是否存在
    if (!corpid || !corpsecret) {
      return NextResponse.json(
        {
          error: "企业微信配置缺失",
          message: "请设置环境变量 WECHAT_CORPID 和 WECHAT_CORPSECRET",
        },
        { status: 500 }
      );
    }

    // 构建企业微信 API 请求 URL
    const apiUrl = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`;

    // 调用企业微信 API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 解析响应
    const data: WeChatTokenResponse = await response.json();

    // 检查企业微信 API 返回的错误码
    if (data.errcode !== 0) {
      return NextResponse.json(
        {
          error: "获取 access_token 失败",
          errcode: data.errcode,
          errmsg: data.errmsg,
        },
        { status: 400 }
      );
    }

    // 返回成功响应
    return NextResponse.json(
      {
        success: true,
        access_token: data.access_token,
        expires_in: data.expires_in,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("获取企业微信 access_token 错误：", error);
    return NextResponse.json(
      {
        error: "服务器错误",
        message: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  }
}

