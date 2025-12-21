# 邮件发送配置指南

## 1. 安装依赖

```bash
npm install nodemailer @types/nodemailer
```

## 2. 创建环境变量文件

在项目根目录创建 `.env.local` 文件，添加以下配置：

```env
# 邮件服务配置
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# 接收通知的邮箱
NOTIFICATION_EMAIL=workbzw@gmail.com

# 是否发送确认邮件给客户（true/false）
SEND_CONFIRMATION_EMAIL=true
```

## 3. Gmail 配置步骤

### 方法一：使用应用专用密码（推荐）

1. 登录 Gmail 账号
2. 前往 [Google 账号设置](https://myaccount.google.com/)
3. 开启"两步验证"
4. 在"安全性"中找到"应用专用密码"
5. 生成一个新的应用专用密码
6. 将生成的密码填入 `SMTP_PASS`

### 方法二：使用 OAuth2（更安全，但配置复杂）

需要配置 OAuth2 客户端，适合生产环境。

## 4. 其他邮件服务配置

### 163 邮箱
```env
SMTP_HOST=smtp.163.com
SMTP_PORT=465
SMTP_SECURE=true
```

### QQ 邮箱
```env
SMTP_HOST=smtp.qq.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 腾讯企业邮箱
```env
SMTP_HOST=smtp.exmail.qq.com
SMTP_PORT=465
SMTP_SECURE=true
```

## 5. 测试

配置完成后，重启开发服务器：

```bash
npm run dev
```

然后提交表单测试邮件发送功能。

## 6. 生产环境部署

在 Vercel/Netlify 等平台部署时，需要在平台的环境变量设置中添加上述配置。

