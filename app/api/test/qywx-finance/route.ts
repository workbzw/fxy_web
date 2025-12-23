import { NextResponse } from "next/server";

/**
 * 测试接口：调用企业微信会话存档测试接口
 * GET /api/test/qywx-finance
 */
export async function GET() {
  try {
    const apiUrl = "http://localhost:8080/api/qywx/finance/test";
    
    console.log(`[测试接口] 正在调用: ${apiUrl}`);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(`[测试接口] 响应状态: ${response.status}`);
    console.log(`[测试接口] 响应数据:`, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      status: response.status,
      requestUrl: apiUrl,
      data: data,
    });
  } catch (error) {
    console.error("[测试接口] 调用失败:", error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "未知错误",
        message: "调用 localhost:8080 接口失败，请确保服务已启动",
      },
      { status: 500 }
    );
  }
}

