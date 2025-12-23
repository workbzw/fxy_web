import { notFound } from "next/navigation";
import { getBlogBySlug, getLocalizedBlog, getPublishedBlogs } from "@/lib/blog";
import { locales, type Locale } from "@/lib/i18n";
import BlogDetailClient from "./page-client";

// 允许动态生成新的路由参数（用于新创建的博客文章）
export const dynamicParams = true;

// 设置为动态渲染，确保每次请求都能获取最新数据
export const dynamic = "force-dynamic";

// 生成静态参数（用于预渲染已有文章）
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    const blogs = getPublishedBlogs(locale);
    for (const blog of blogs) {
      params.push({
        locale,
        slug: blog.slug,
      });
    }
  }
  
  return params;
}

// 生成元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const blog = getBlogBySlug(slug);
  const baseUrl = "https://www.helloworld.today";
  
  if (!blog) {
    return {
      title: "文章未找到",
    };
  }
  
  const localizedBlog = getLocalizedBlog(blog, locale as Locale);
  const articleUrl = `${baseUrl}/${locale}/blog/${encodeURIComponent(blog.slug)}`;
  
  return {
    title: `${localizedBlog.title} | 风想云科技`,
    description: localizedBlog.summary,
    keywords: localizedBlog.tags.join(", "),
    authors: [{ name: localizedBlog.author }],
    creator: localizedBlog.author,
    publisher: "风想云科技",
    alternates: {
      canonical: articleUrl,
      languages: {
        "zh-CN": `${baseUrl}/zh/blog/${encodeURIComponent(blog.slug)}`,
        "en-US": `${baseUrl}/en/blog/${encodeURIComponent(blog.slug)}`,
      },
    },
    openGraph: {
      title: localizedBlog.title,
      description: localizedBlog.summary,
      url: articleUrl,
      siteName: "风想云科技",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt || blog.date,
      authors: [localizedBlog.author],
      tags: localizedBlog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: localizedBlog.title,
      description: localizedBlog.summary,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog || !blog.published) {
    notFound();
  }
  
  const localizedBlog = getLocalizedBlog(blog, locale as Locale);
  
  return <BlogDetailClient blog={localizedBlog} locale={locale as Locale} />;
}

