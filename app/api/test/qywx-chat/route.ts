import { NextRequest, NextResponse } from "next/server";

/**
 * 测试接口：调用企业微信聊天记录接口
 * GET /api/test/qywx-chat?seq=0&limit=10
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const seq = searchParams.get("seq") || "0";
    const limit = searchParams.get("limit") || "10";

    const apiUrl = `http://localhost:8080/api/qywx/chat?seq=${seq}&limit=${limit}`;
    
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

