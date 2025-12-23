"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { FaArrowLeft, FaCalendar, FaClock, FaTag, FaUser } from "react-icons/fa";
import NavigationBar from "@/app/components/NavigationBar";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n";

interface BlogDetailClientProps {
  blog: BlogPost;
  locale: Locale;
}

export default function BlogDetailClient({ blog, locale }: BlogDetailClientProps) {
  const t = {
    zh: {
      back: "返回新闻列表",
      readTime: "阅读时间",
      minutes: "分钟",
      author: "作者",
      publishDate: "发布日期",
      tags: "标签",
    },
    en: {
      back: "Back to News",
      readTime: "Read Time",
      minutes: "min",
      author: "Author",
      publishDate: "Published",
      tags: "Tags",
    },
  }[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF6FF] via-white to-[#F8FAFC]">
      <NavigationBar locale={locale} />
      
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16 sm:px-8">
        {/* 返回链接 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/${locale}#news`}
            className="inline-flex items-center gap-2 text-[#3483FA] hover:text-[#1551C4] transition mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            {t.back}
          </Link>
        </motion.div>

        {/* 文章头部 */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* 分类 */}
          <span className="inline-block rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-4 py-1 text-sm text-white font-medium mb-4">
            {blog.category}
          </span>
          
          {/* 标题 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#193A7D] leading-tight mb-6">
            {blog.title}
          </h1>
          
          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#71717A]">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#3483FA]" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-[#3483FA]" />
              <span>{blog.date}</span>
            </div>
            {blog.readTime && (
              <div className="flex items-center gap-2">
                <FaClock className="text-[#3483FA]" />
                <span>{blog.readTime} {t.minutes}</span>
              </div>
            )}
          </div>
          
          {/* 标签 */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <FaTag className="text-[#3483FA]" />
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#EEF6FF] px-3 py-1 text-xs text-[#1551C4] border border-[#DCEEFF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        {/* 摘要 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-[#B8DCFF] bg-gradient-to-r from-[#EEF6FF] to-[#DCEEFF] p-6 mb-8"
        >
          <p className="text-[#1551C4] text-lg leading-relaxed">
            {blog.summary}
          </p>
        </motion.div>

        {/* 文章内容 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none
            prose-headings:text-[#193A7D] prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#DCEEFF] prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#3F3F46] prose-p:leading-relaxed
            prose-a:text-[#3483FA] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#193A7D]
            prose-code:text-[#1551C4] prose-code:bg-[#EEF6FF] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-[#1E293B] prose-pre:text-[#E2E8F0] prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-[#334155]
            prose-blockquote:border-l-4 prose-blockquote:border-[#3483FA] prose-blockquote:bg-[#EEF6FF] prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-[#1551C4]
            prose-ul:text-[#3F3F46] prose-ol:text-[#3F3F46]
            prose-li:marker:text-[#3483FA]
            prose-table:border prose-table:border-[#DCEEFF] prose-table:rounded-xl prose-table:overflow-hidden
            prose-th:bg-[#EEF6FF] prose-th:text-[#193A7D] prose-th:font-bold prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-[#DCEEFF]
            prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-[#DCEEFF]
            prose-img:rounded-xl prose-img:shadow-lg
            prose-hr:border-[#DCEEFF]
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.article>

        {/* 底部导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#DCEEFF]"
        >
          <Link
            href={`/${locale}#news`}
            className="btn-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-6 py-3 font-medium shadow-[0_4px_20px_rgba(52,131,250,0.4)] hover:shadow-[0_6px_30px_rgba(52,131,250,0.6)] hover:scale-[1.02] transition"
            style={{ color: "#FFFFFF" }}
          >
            <FaArrowLeft />
            {t.back}
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] border-t border-[#DCEEFF] py-6">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-[#71717A]">
            <p>© {new Date().getFullYear()} 风想云科技. All rights reserved.</p>
            <p>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3483FA] transition-colors"
              >
                京ICP备2022031958号-5
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

