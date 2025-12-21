import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 创建邮件发送器
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // 发送邮件的邮箱
      pass: process.env.SMTP_PASS, // 邮箱密码或应用专用密码
    },
    // 添加连接超时和重试配置
    connectionTimeout: 10000, // 10秒连接超时
    greetingTimeout: 10000,
    socketTimeout: 10000,
    // 如果使用 587 端口，需要启用 TLS
    requireTLS: port === 587,
    tls: {
      rejectUnauthorized: false, // 在某些网络环境下可能需要
    },
  });
};

// 发送邮件函数
async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const transporter = createTransporter();
  
  await transporter.sendMail({
    from: `"风想云科技" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // 验证必填字段
    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "邮箱格式不正确" },
        { status: 400 }
      );
    }

    // 检查邮件配置
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("邮件配置缺失，请检查环境变量");
      // 开发环境：仍然返回成功，但记录到控制台
      console.log("收到新的需求登记：", {
        name,
        company,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { message: "提交成功，我们会尽快与您联系！" },
        { status: 200 }
      );
    }

    // 发送邮件通知
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3483FA 0%, #1551C4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin: 15px 0; }
            .label { font-weight: bold; color: #1551C4; }
            .value { margin-top: 5px; color: #666; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #3483FA; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎉 新的需求登记</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">姓名：</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">公司：</div>
                <div class="value">${company}</div>
              </div>
              <div class="field">
                <div class="label">邮箱：</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">电话：</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">需求描述：</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
                提交时间：${new Date().toLocaleString("zh-CN")}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // 发送到你的邮箱
    await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || "workbzw@gmail.com",
      subject: `新需求登记 - ${company} - ${name}`,
      html: emailHtml,
    });

    // 可选：同时发送确认邮件给客户
    if (process.env.SEND_CONFIRMATION_EMAIL === "true") {
      const confirmationHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3483FA 0%, #1551C4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>感谢您的咨询！</h2>
              </div>
              <div class="content">
                <p>尊敬的 ${name}，</p>
                <p>我们已经收到您的需求登记，我们的团队会在 24 小时内与您联系。</p>
                <p>您提交的信息：</p>
                <ul>
                  <li>公司：${company}</li>
                  <li>需求：${message}</li>
                </ul>
                <p>如有任何问题，请随时联系我们：</p>
                <p>电话：15834544303<br>邮箱：workbzw@gmail.com</p>
                <p style="margin-top: 30px; color: #999; font-size: 12px;">此邮件由系统自动发送，请勿回复。</p>
              </div>
            </div>
          </body>
        </html>
      `;

      await sendEmail({
        to: email,
        subject: "感谢您的咨询 - 风想云科技",
        html: confirmationHtml,
      });
    }

    return NextResponse.json(
      { message: "提交成功，我们会尽快与您联系！" },
      { status: 200 }
    );
  } catch (error) {
    console.error("表单提交错误：", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}

