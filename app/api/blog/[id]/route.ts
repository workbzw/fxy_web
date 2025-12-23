import { NextRequest, NextResponse } from "next/server";
import {
  getBlogById,
  updateBlog,
  deleteBlog,
  calculateReadTime,
} from "@/lib/blog";

// 简单的管理密钥验证
function verifyAdminKey(request: NextRequest): boolean {
  const adminKey = request.headers.get("x-admin-key");
  const expectedKey = process.env.BLOG_ADMIN_KEY || "fxy_admin_2024";
  return adminKey === expectedKey;
}

// GET - 获取单篇博客
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = getBlogById(id);
    
    if (!blog) {
      return NextResponse.json(
        { error: "博客不存在" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("获取博客失败:", error);
    return NextResponse.json(
      { error: "获取博客失败" },
      { status: 500 }
    );
  }
}

// PUT - 更新博客
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 验证管理权限
    if (!verifyAdminKey(request)) {
      return NextResponse.json(
        { error: "未授权访问" },
        { status: 401 }
      );
    }
    
    const { id } = await params;
    const body = await request.json();
    
    // 检查博客是否存在
    const existingBlog = getBlogById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { error: "博客不存在" },
        { status: 404 }
      );
    }
    
    // 如果更新了内容，重新计算阅读时间
    const updates = { ...body };
    if (body.content) {
      updates.readTime = calculateReadTime(body.content);
    }
    
    // 更新博客
    const updatedBlog = updateBlog(id, updates);
    
    return NextResponse.json({
      success: true,
      message: "博客更新成功",
      data: updatedBlog,
    });
  } catch (error) {
    console.error("更新博客失败:", error);
    return NextResponse.json(
      { error: "更新博客失败" },
      { status: 500 }
    );
  }
}

// DELETE - 删除博客
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 验证管理权限
    if (!verifyAdminKey(request)) {
      return NextResponse.json(
        { error: "未授权访问" },
        { status: 401 }
      );
    }
    
    const { id } = await params;
    
    // 检查博客是否存在
    const existingBlog = getBlogById(id);
    if (!existingBlog) {
      return NextResponse.json(
        { error: "博客不存在" },
        { status: 404 }
      );
    }
    
    // 删除博客
    const success = deleteBlog(id);
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: "博客删除成功",
      });
    } else {
      return NextResponse.json(
        { error: "删除失败" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("删除博客失败:", error);
    return NextResponse.json(
      { error: "删除博客失败" },
      { status: 500 }
    );
  }
}

