# 企业微信 API 配置指南

## 1. 获取企业微信配置信息

### 步骤一：获取企业 ID (CorpID)

1. 登录 [企业微信管理后台](https://work.weixin.qq.com/)
2. 进入 **"我的企业"** → **"企业信息"**
3. 在页面中找到 **"企业ID"** (CorpID)
4. 复制这个 ID，这就是 `WECHAT_CORPID`

### 步骤二：创建应用并获取密钥 (CorpSecret)

1. 在企业微信管理后台，进入 **"应用管理"** → **"自建"**
2. 点击 **"创建应用"** 或选择已有应用
3. 填写应用信息（名称、描述等）
4. 创建成功后，进入应用详情页
5. 在 **"Secret"** 或 **"应用密钥"** 处，点击 **"查看"** 或 **"重置"**
6. 复制生成的 Secret，这就是 `WECHAT_CORPSECRET`

⚠️ **注意**：Secret 只在创建或重置时显示一次，请妥善保存。如果忘记，需要重置 Secret。

## 2. 配置环境变量

在项目根目录创建 `.env.local` 文件（如果已存在，直接添加以下配置）：

```env
# 企业微信配置
WECHAT_CORPID=你的企业ID
WECHAT_CORPSECRET=你的应用密钥
```

**示例：**
```env
WECHAT_CORPID=ww1234567890abcdef
WECHAT_CORPSECRET=abc123def456ghi789jkl012mno345pqr678stu901vwx234
```

## 3. 测试 API

配置完成后，重启开发服务器：

```bash
npm run dev
```

然后访问或调用 API：

```bash
# 使用 curl 测试
curl http://localhost:3000/api/wechat/token

# 或在浏览器中访问
http://localhost:3000/api/wechat/token
```

**成功响应示例：**
```json
{
  "success": true,
  "access_token": "ACCESS_TOKEN_STRING",
  "expires_in": 7200
}
```

## 4. 生产环境部署

在 Vercel/Netlify 等平台部署时，需要在平台的环境变量设置中添加：

- `WECHAT_CORPID` = 你的企业ID
- `WECHAT_CORPSECRET` = 你的应用密钥

### Vercel 配置步骤：
1. 进入项目设置 → Environment Variables
2. 添加 `WECHAT_CORPID` 和 `WECHAT_CORPSECRET`
3. 选择对应的环境（Production/Preview/Development）
4. 重新部署项目

## 5. 常见问题

### Q: 返回错误码 40013？
A: 检查 `WECHAT_CORPID` 是否正确，确保没有多余的空格或引号。

### Q: 返回错误码 40001？
A: 检查 `WECHAT_CORPSECRET` 是否正确，Secret 可能已过期或被重置。

### Q: access_token 有效期多久？
A: 企业微信 access_token 有效期为 7200 秒（2 小时），建议在服务端缓存。

### Q: 如何查看应用权限？
A: 在企业微信管理后台的"应用管理"中，可以查看和配置应用的可见范围和权限。

## 6. API 使用说明

**请求方式：** GET  
**请求地址：** `/api/wechat/token`

**响应格式：**

成功：
```json
{
  "success": true,
  "access_token": "ACCESS_TOKEN",
  "expires_in": 7200
}
```

失败：
```json
{
  "error": "错误描述",
  "errcode": 错误码,
  "errmsg": "错误消息"
}
```

**企业微信错误码参考：**
- `0`: 成功
- `40013`: 不合法的 corpid
- `40001`: 不合法的 secret
- `40014`: 不合法的 access_token

更多错误码请参考 [企业微信官方文档](https://developer.work.weixin.qq.com/document/path/91039)

## 7. 回调URL验证配置

如需配置企业微信回调URL（用于接收消息和事件），需要额外配置以下环境变量：

### 步骤一：在企业微信后台配置回调

1. 进入 **"应用管理"** → 选择你的应用
2. 进入 **"接收消息"** 或 **"回调配置"**
3. 设置 URL：`https://你的域名/api/cwx/response`
4. 点击 **"随机生成"** 获取 Token 和 EncodingAESKey
5. 保存这些配置

### 步骤二：配置环境变量

在 `.env.local` 中添加：

```env
# 企业微信回调配置
WECHAT_CALLBACK_TOKEN=你的Token
WECHAT_ENCODING_AES_KEY=你的EncodingAESKey（43位）
```

**示例：**
```env
WECHAT_CALLBACK_TOKEN=abc123XYZ
WECHAT_ENCODING_AES_KEY=abcdefghijklmnopqrstuvwxyz0123456789ABCDEF
```

### 步骤三：验证URL

配置完成后，在企业微信后台点击 **"保存"**，企业微信会向你的URL发送验证请求。
如果验证成功，配置将被保存。

### 回调API说明

**请求方式：** GET（验证URL）/ POST（接收消息）  
**请求地址：** `/api/cwx/response`

**验证流程（GET请求）：**
1. 企业微信发送 `msg_signature`、`timestamp`、`nonce`、`echostr` 参数
2. 服务端计算签名验证请求合法性
3. 解密 `echostr` 并返回明文

**接收消息（POST请求）：**
- 预留接口，可扩展处理各种消息和事件

**参考文档：** [企业微信验证URL有效性](https://developer.work.weixin.qq.com/document/10514)

