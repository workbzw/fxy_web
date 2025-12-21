# 快速开始指南

## 🚀 立即运行

```bash
# 1. 进入项目目录
cd /Users/teejoo/workspace/next/fxy

# 2. 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网站效果！

## 📄 已完成的页面

✅ **首页** (/) - Hero区 + 核心服务 + 成功案例 + CTA
✅ **关于我们** (/about) - 公司介绍、使命愿景、核心价值观、发展历程
✅ **服务介绍** (/services) - 服务详情、技术栈、服务流程
✅ **案例展示** (/cases) - 成功案例、详情模态框、行业筛选
✅ **团队介绍** (/team) - 团队成员、团队文化、招聘信息
✅ **新闻动态** (/news) - 公司动态、分类筛选、时间线展示
✅ **联系我们** (/contact) - 在线表单、联系方式、常见问题

## 🎨 设计亮点

- **配色**: 深蓝(#1E3A8A) + 金黄(#FCD34D) + 白色
- **动效**: Framer Motion 流畅动画
- **响应式**: 完美适配所有设备
- **SEO**: 完整的metadata和sitemap

## 🔧 快速定制

### 修改公司信息
编辑 `lib/data.ts` 文件中的：
- `aboutData` - 公司基本信息
- `contactData` - 联系方式
- `servicesData` - 服务列表
- `casesData` - 案例列表
- `teamData` - 团队成员
- `newsData` - 新闻动态

### 修改配色
编辑 `tailwind.config.ts` 中的 `colors` 配置

### 修改页面内容
直接编辑对应的页面文件：
- 首页: `app/page.tsx`
- 关于: `app/about/page.tsx`
- 服务: `app/services/page.tsx`
- 案例: `app/cases/page.tsx`
- 团队: `app/team/page.tsx`
- 新闻: `app/news/page.tsx`
- 联系: `app/contact/page.tsx`

## 📦 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 💡 温馨提示

1. 当前使用的是示例数据，请根据实际情况修改 `lib/data.ts`
2. 图片使用的是占位符emoji，建议替换为实际图片
3. 表单提交功能为模拟，需要连接后端API
4. 建议添加 Google Analytics 等分析工具

---

✨ 祝使用愉快！如有问题，请查看 README.md 获取更多信息。

