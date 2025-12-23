"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaStar,
  FaRegStar,
  FaSave,
  FaTimes,
  FaArrowLeft,
  FaSpinner,
} from "react-icons/fa";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  summary: string;
  summaryEn?: string;
  content: string;
  contentEn?: string;
  category: string;
  categoryEn?: string;
  author: string;
  authorEn?: string;
  date: string;
  updatedAt?: string;
  published: boolean;
  featured?: boolean;
  tags: string[];
  tagsEn?: string[];
  readTime?: number;
}

const ADMIN_KEY = "fxy_admin_2024"; // 实际使用时应从环境变量或安全存储获取

export default function BlogAdminPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // 初始表单数据
  const emptyForm: Omit<BlogPost, "id"> = {
    slug: "",
    title: "",
    titleEn: "",
    summary: "",
    summaryEn: "",
    content: "",
    contentEn: "",
    category: "",
    categoryEn: "",
    author: "风想云科技",
    authorEn: "WindThink Cloud Tech",
    date: new Date().toISOString().split("T")[0],
    published: false,
    featured: false,
    tags: [],
    tagsEn: [],
  };

  const [formData, setFormData] = useState<Omit<BlogPost, "id">>(emptyForm);
  const [tagsInput, setTagsInput] = useState("");
  const [tagsEnInput, setTagsEnInput] = useState("");

  // 获取博客列表
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error("获取博客列表失败:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 显示消息
  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  // 开始编辑
  const startEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData(blog);
    setTagsInput(blog.tags.join(", "));
    setTagsEnInput(blog.tagsEn?.join(", ") || "");
    setIsCreating(false);
  };

  // 开始创建
  const startCreate = () => {
    setEditingBlog(null);
    setFormData(emptyForm);
    setTagsInput("");
    setTagsEnInput("");
    setIsCreating(true);
  };

  // 取消编辑
  const cancelEdit = () => {
    setEditingBlog(null);
    setIsCreating(false);
    setFormData(emptyForm);
  };

  // 保存博客
  const saveBlog = async () => {
    setSaving(true);

    const blogData = {
      ...formData,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      tagsEn: tagsEnInput.split(",").map((t) => t.trim()).filter(Boolean),
    };

    try {
      const url = editingBlog ? `/api/blog/${editingBlog.id}` : "/api/blog";
      const method = editingBlog ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.success) {
        showMessage("success", editingBlog ? "博客更新成功！" : "博客创建成功！");
        fetchBlogs();
        cancelEdit();
      } else {
        showMessage("error", data.error || "操作失败");
      }
    } catch (error) {
      showMessage("error", "操作失败，请重试");
    } finally {
      setSaving(false);
    }
  };

  // 删除博客
  const deleteBlogItem = async (id: string) => {
    if (!confirm("确定要删除这篇博客吗？此操作不可恢复。")) return;

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-key": ADMIN_KEY,
        },
      });

      const data = await res.json();

      if (data.success) {
        showMessage("success", "博客删除成功！");
        fetchBlogs();
      } else {
        showMessage("error", data.error || "删除失败");
      }
    } catch (error) {
      showMessage("error", "删除失败，请重试");
    }
  };

  // 切换发布状态
  const togglePublish = async (blog: BlogPost) => {
    try {
      const res = await fetch(`/api/blog/${blog.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify({ published: !blog.published }),
      });

      const data = await res.json();

      if (data.success) {
        showMessage("success", blog.published ? "已取消发布" : "已发布");
        fetchBlogs();
      }
    } catch (error) {
      showMessage("error", "操作失败");
    }
  };

  // 切换推荐状态
  const toggleFeatured = async (blog: BlogPost) => {
    try {
      const res = await fetch(`/api/blog/${blog.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify({ featured: !blog.featured }),
      });

      const data = await res.json();

      if (data.success) {
        showMessage("success", blog.featured ? "已取消推荐" : "已设为推荐");
        fetchBlogs();
      }
    } catch (error) {
      showMessage("error", "操作失败");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/zh"
                className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
              >
                <FaArrowLeft /> 返回网站
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">博客管理</h1>
            </div>
            <button
              onClick={startCreate}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaPlus /> 新建文章
            </button>
          </div>
        </div>
      </header>

      {/* 消息提示 */}
      {message && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
            message.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message.text}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 编辑/创建表单 */}
        {(isCreating || editingBlog) && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {editingBlog ? "编辑文章" : "新建文章"}
              </h2>
              <button
                onClick={cancelEdit}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 左侧：中文内容 */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 border-b pb-2">中文内容</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    标题 *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="文章标题"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    摘要
                  </label>
                  <textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                    placeholder="文章摘要（可选）"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    内容 * (Markdown)
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    rows={15}
                    placeholder="使用 Markdown 格式编写内容..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      分类 *
                    </label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="如：公司动态"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      作者
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    标签（用逗号分隔）
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="AI, 技术, 创新"
                  />
                </div>
              </div>

              {/* 右侧：英文内容 */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 border-b pb-2">English Content (Optional)</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={formData.titleEn}
                    onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Article title in English"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Summary (English)
                  </label>
                  <textarea
                    value={formData.summaryEn}
                    onChange={(e) => setFormData({ ...formData, summaryEn: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                    placeholder="Article summary in English"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content (English, Markdown)
                  </label>
                  <textarea
                    value={formData.contentEn}
                    onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    rows={15}
                    placeholder="Write content in Markdown format..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category (English)
                    </label>
                    <input
                      type="text"
                      value={formData.categoryEn}
                      onChange={(e) => setFormData({ ...formData, categoryEn: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Company News"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author (English)
                    </label>
                    <input
                      type="text"
                      value={formData.authorEn}
                      onChange={(e) => setFormData({ ...formData, authorEn: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags (English, comma separated)
                  </label>
                  <input
                    type="text"
                    value={tagsEnInput}
                    onChange={(e) => setTagsEnInput(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="AI, Technology, Innovation"
                  />
                </div>
              </div>
            </div>

            {/* 底部设置 */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="auto-generated-from-title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    发布日期
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">发布</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 text-yellow-500 rounded focus:ring-yellow-500"
                    />
                    <span className="text-sm text-gray-700">推荐</span>
                  </label>
                </div>

                <div className="ml-auto">
                  <button
                    onClick={saveBlog}
                    disabled={saving || !formData.title || !formData.content || !formData.category}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <FaSave />
                    )}
                    {saving ? "保存中..." : "保存"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 博客列表 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              文章列表 ({blogs.length})
            </h2>
          </div>

          {blogs.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="mb-4">暂无文章</p>
              <button
                onClick={startCreate}
                className="text-blue-500 hover:text-blue-600"
              >
                创建第一篇文章
              </button>
            </div>
          ) : (
            <div className="divide-y">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="px-6 py-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            blog.published
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {blog.published ? "已发布" : "草稿"}
                        </span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                          {blog.category}
                        </span>
                        {blog.featured && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">
                            推荐
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-gray-900 truncate">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {blog.summary}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        <span>{blog.date}</span>
                        <span>{blog.author}</span>
                        {blog.readTime && <span>{blog.readTime} 分钟阅读</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePublish(blog)}
                        className={`p-2 rounded-lg transition ${
                          blog.published
                            ? "text-green-500 hover:bg-green-50"
                            : "text-gray-400 hover:bg-gray-100"
                        }`}
                        title={blog.published ? "取消发布" : "发布"}
                      >
                        {blog.published ? <FaEye /> : <FaEyeSlash />}
                      </button>
                      <button
                        onClick={() => toggleFeatured(blog)}
                        className={`p-2 rounded-lg transition ${
                          blog.featured
                            ? "text-yellow-500 hover:bg-yellow-50"
                            : "text-gray-400 hover:bg-gray-100"
                        }`}
                        title={blog.featured ? "取消推荐" : "设为推荐"}
                      >
                        {blog.featured ? <FaStar /> : <FaRegStar />}
                      </button>
                      <button
                        onClick={() => startEdit(blog)}
                        className="p-2 rounded-lg text-blue-500 hover:bg-blue-50 transition"
                        title="编辑"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteBlogItem(blog.id)}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                        title="删除"
                      >
                        <FaTrash />
                      </button>
                      <Link
                        href={`/zh/blog/${blog.slug}`}
                        target="_blank"
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
                        title="预览"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

