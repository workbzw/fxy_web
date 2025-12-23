import { NextRequest, NextResponse } from "next/server";
import {
  getAllBlogs,
  createBlog,
  calculateReadTime,
  generateSlug,
  type BlogPost,
} from "@/lib/blog";

// 简单的管理密钥验证（生产环境应使用更安全的认证方式）
function verifyAdminKey(request: NextRequest): boolean {
  const adminKey = request.headers.get("x-admin-key");
  const expectedKey = process.env.BLOG_ADMIN_KEY || "fxy_admin_2024";
  return adminKey === expectedKey;
}

// GET - 获取所有博客文章
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");
    const featured = searchParams.get("featured");
    
    let blogs = getAllBlogs();
    
    // 过滤已发布的文章
    if (published === "true") {
      blogs = blogs.filter((blog) => blog.published);
    } else if (published === "false") {
      blogs = blogs.filter((blog) => !blog.published);
    }
    
    // 过滤推荐文章
    if (featured === "true") {
      blogs = blogs.filter((blog) => blog.featured);
    }
    
    // 按日期排序（最新的在前）
    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json({
      success: true,
      data: blogs,
      total: blogs.length,
    });
  } catch (error) {
    console.error("获取博客列表失败:", error);
    return NextResponse.json(
      { error: "获取博客列表失败" },
      { status: 500 }
    );
  }
}

// POST - 创建新博客文章
export async function POST(request: NextRequest) {
  try {
    // 验证管理权限
    if (!verifyAdminKey(request)) {
      return NextResponse.json(
        { error: "未授权访问" },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // 验证必填字段
    if (!body.title || !body.content || !body.category) {
      return NextResponse.json(
        { error: "标题、内容和分类为必填项" },
        { status: 400 }
      );
    }
    
    // 生成 slug
    const slug = body.slug || generateSlug(body.title);
    
    // 计算阅读时间
    const readTime = calculateReadTime(body.content);
    
    // 创建新博客
    const newBlog = createBlog({
      slug,
      title: body.title,
      titleEn: body.titleEn || "",
      summary: body.summary || body.content.substring(0, 150) + "...",
      summaryEn: body.summaryEn || "",
      content: body.content,
      contentEn: body.contentEn || "",
      category: body.category,
      categoryEn: body.categoryEn || "",
      author: body.author || "风想云科技",
      authorEn: body.authorEn || "WindThink Cloud Tech",
      date: body.date || new Date().toISOString().split("T")[0],
      published: body.published ?? false,
      featured: body.featured ?? false,
      tags: body.tags || [],
      tagsEn: body.tagsEn || [],
      coverImage: body.coverImage || "",
      readTime,
    });
    
    return NextResponse.json({
      success: true,
      message: "博客创建成功",
      data: newBlog,
    });
  } catch (error) {
    console.error("创建博客失败:", error);
    return NextResponse.json(
      { error: "创建博客失败" },
      { status: 500 }
    );
  }
}

