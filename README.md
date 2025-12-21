# 智创AI科技 - 企业官网

这是一个专业的AI企业官网项目，采用黄白蓝商务配色方案，展示AI技术服务与解决方案。

## 🎨 设计特色

- **配色方案**: 深蓝色（#1E3A8A）+ 金黄色（#FCD34D）+ 白色，体现专业与创新
- **商务风格**: 简洁大气的设计，适合B2B企业展示
- **响应式设计**: 完美适配桌面端、平板和移动端
- **动效交互**: 流畅的滚动动画和页面过渡效果

## 🚀 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: React Icons
- **语言**: TypeScript
- **部署**: 支持 Vercel、Netlify 等平台

## 📦 页面结构

```
/                 # 首页 (Hero + 服务 + 案例 + CTA)
/about            # 关于我们 (公司介绍、使命愿景、发展历程)
/services         # 服务介绍 (核心服务、技术栈、服务流程)
/cases            # 案例展示 (成功案例、详情模态框、行业筛选)
/team             # 团队介绍 (核心成员、团队文化、招聘信息)
/news             # 新闻动态 (公司动态、分类筛选、时间线)
/contact          # 联系我们 (在线表单、联系方式、常见问题)
```

## 🎯 核心功能

1. **导航栏**
   - 固定顶部导航，滚动时背景变化
   - 响应式汉堡菜单（移动端）
   - 平滑滚动锚点

2. **Hero区块**
   - 全屏渐变背景
   - 动态浮动元素
   - CTA按钮和数据展示

3. **服务卡片**
   - 悬停动画效果
   - 图标+标题+描述+特性
   - 颜色主题区分

4. **案例展示**
   - 网格布局展示
   - 详情模态框
   - 行业筛选功能

5. **咨询表单**
   - 完整的表单验证
   - 实时错误提示
   - 提交成功反馈

6. **滚动动画**
   - 进入视口触发动画
   - 淡入、滑入、缩放效果
   - 优化性能，仅触发一次

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📁 项目结构

```
fxy/
├── app/                      # Next.js App Router 页面
│   ├── about/               # 关于我们页面
│   ├── cases/               # 案例展示页面
│   ├── contact/             # 联系我们页面
│   ├── news/                # 新闻动态页面
│   ├── services/            # 服务介绍页面
│   ├── team/                # 团队介绍页面
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局（含SEO配置）
│   ├── page.tsx             # 首页
│   └── sitemap.ts           # 站点地图
├── components/              # 可复用组件
│   ├── AnimatedSection.tsx  # 动画包装器
│   ├── CaseCard.tsx         # 案例卡片
│   ├── ContactForm.tsx      # 咨询表单
│   ├── Footer.tsx           # 页脚
│   ├── Hero.tsx             # Hero区块
│   ├── Navbar.tsx           # 导航栏
│   ├── NewsCard.tsx         # 新闻卡片
│   ├── ServiceCard.tsx      # 服务卡片
│   └── TeamMemberCard.tsx   # 团队成员卡片
├── lib/                     # 工具和数据
│   └── data.ts              # 静态数据（服务、案例、团队等）
├── public/                  # 静态资源
│   ├── manifest.json        # PWA配置
│   └── robots.txt           # 搜索引擎爬虫配置
├── tailwind.config.ts       # Tailwind配置（主题色）
├── next.config.ts           # Next.js配置（性能优化）
└── tsconfig.json            # TypeScript配置
```

## 🎨 自定义配置

### 修改配色方案

编辑 `tailwind.config.ts`：

```typescript
colors: {
  primary: {
    // 主色调（蓝色系）
    900: '#1E3A8A',
    // ...
  },
  secondary: {
    // 辅助色（黄色系）
    400: '#FCD34D',
    // ...
  },
}
```

### 修改公司信息

编辑 `lib/data.ts`：

```typescript
export const aboutData = {
  company: {
    name: "智创AI科技",
    founded: "2020",
    // ...
  },
  // ...
}
```

### 修改联系方式

编辑 `lib/data.ts` 中的 `contactData`：

```typescript
export const contactData = {
  phone: "400-888-8888",
  email: "contact@ai-company.com",
  address: "北京市海淀区中关村大街1号",
  // ...
}
```

## 📱 响应式断点

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

所有组件均使用 Tailwind 的响应式类（`sm:`, `md:`, `lg:`, `xl:`）实现自适应布局。

## ⚡ 性能优化

1. **图片优化**: 配置了 Next.js Image 优化（AVIF/WebP格式）
2. **代码分割**: 自动进行路由级别的代码分割
3. **字体优化**: 使用 `font-display: swap` 优化字体加载
4. **压缩**: 生产环境自动启用 Gzip 压缩
5. **Tree Shaking**: 移除未使用的代码
6. **静态生成**: 所有页面预渲染为静态HTML

## 🔍 SEO优化

1. **完整的 Metadata**: 标题、描述、关键词等
2. **Open Graph**: 支持社交媒体分享
3. **Sitemap**: 自动生成站点地图
4. **Robots.txt**: 搜索引擎爬虫配置
5. **语义化 HTML**: 正确使用标题标签（h1-h6）
6. **结构化数据**: 准备好添加 JSON-LD

## 🎯 待优化项

1. **图片资源**: 当前使用占位符图标，建议替换为实际项目图片
2. **内容完善**: 根据实际业务情况完善各页面内容
3. **联系表单**: 连接后端API实现真实的表单提交
4. **分析工具**: 集成 Google Analytics 或其他分析工具
5. **多语言**: 如需要可添加国际化支持

## 📄 许可证

MIT

## 👨‍💻 开发者

智创AI科技技术团队

---

**技术支持**: 如有问题，欢迎联系我们的技术团队。
