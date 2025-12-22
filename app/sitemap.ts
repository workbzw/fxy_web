import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.helloworld.today";
  const currentDate = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "cases", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "tech", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "team", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "news", priority: 0.8, changeFrequency: "daily" as const },
    { path: "about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 添加中英文版本
  ["zh", "en"].forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path ? `#${route.path}` : ""}`,
      lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            "zh-CN": `${baseUrl}/zh${route.path ? `#${route.path}` : ""}`,
            "en-US": `${baseUrl}/en${route.path ? `#${route.path}` : ""}`,
          },
    },
      });
    });
  });

  return sitemapEntries;
}

