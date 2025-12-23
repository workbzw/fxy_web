import { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.helloworld.today";
  const currentDate = new Date();

  // 主页面路由
  const mainRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 添加主页面（中英文版本）
  ["zh", "en"].forEach((locale) => {
    mainRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            "zh-CN": `${baseUrl}/zh${route.path}`,
            "en-US": `${baseUrl}/en${route.path}`,
          },
        },
      });
    });
  });

  // 添加博客文章
  const blogs = getPublishedBlogs("zh");
  
  blogs.forEach((blog) => {
    // 中文版本
    sitemapEntries.push({
      url: `${baseUrl}/zh/blog/${encodeURIComponent(blog.slug)}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          "zh-CN": `${baseUrl}/zh/blog/${encodeURIComponent(blog.slug)}`,
          "en-US": `${baseUrl}/en/blog/${encodeURIComponent(blog.slug)}`,
        },
      },
    });
  });

  return sitemapEntries;
}
