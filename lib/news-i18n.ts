import { Locale } from "./i18n";
import { getPublishedBlogs, getLocalizedBlog } from "./blog";

export function getNewsData(locale: Locale) {
  const blogs = getPublishedBlogs(locale);
  
  // 获取置顶文章（最多2个）
  const featuredBlogs = blogs
    .filter((blog) => blog.featured)
    .slice(0, 2);
  
  // 获取非置顶的最新文章
  const regularBlogs = blogs
    .filter((blog) => !blog.featured)
    .slice(0, 4);
  
  // 合并：先显示置顶，再显示最新（最多6个）
  const displayBlogs = [...featuredBlogs, ...regularBlogs].slice(0, 6);
  
  // 转换为新闻列表格式
  return displayBlogs.map((blog, index) => {
    const localized = getLocalizedBlog(blog, locale);
    return {
      id: index + 1,
      slug: blog.slug,
      title: localized.title,
      date: blog.date,
      category: localized.category,
      summary: localized.summary,
      featured: blog.featured || false,
    };
  });
}
