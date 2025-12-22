# SEO 优化配置说明

## 已完成的 SEO 优化

### 1. 基础 SEO 配置
- ✅ 完整的 metadata 配置（标题、描述、关键词）
- ✅ Open Graph 标签（社交媒体分享优化）
- ✅ Twitter Card 标签
- ✅ 多语言支持（hreflang 标签）
- ✅ Canonical URL 设置

### 2. 结构化数据（Schema.org）
- ✅ Organization Schema（组织信息）
- ✅ WebSite Schema（网站信息）
- ✅ Service Schema（服务信息）
- ✅ 自动根据语言切换结构化数据

### 3. 搜索引擎优化
- ✅ 优化的 robots.txt（支持 Google、百度、Bing）
- ✅ 完整的 sitemap.xml（包含中英文版本）
- ✅ 移动端友好配置
- ✅ 图片优化配置

### 4. 技术 SEO
- ✅ 语义化 HTML 结构
- ✅ 快速加载优化
- ✅ 响应式设计

## 需要手动配置的部分

### 1. 百度站长平台验证

1. 访问 [百度站长平台](https://ziyuan.baidu.com/)
2. 添加网站并获取验证码
3. 在 `app/[locale]/layout.tsx` 中取消注释并填入验证码：

```typescript
verification: {
  other: {
    "baidu-site-verification": "你的百度验证码",
  },
},
```

或者在 `app/layout.tsx` 的 `<head>` 中添加：

```html
<meta name="baidu-site-verification" content="你的百度验证码" />
```

### 2. Google Search Console 验证

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站并获取验证码
3. 在 `app/[locale]/layout.tsx` 中取消注释并填入验证码：

```typescript
verification: {
  google: "你的Google验证码",
},
```

### 3. Open Graph 图片

需要创建并上传 OG 图片到 `public/og-image.jpg`：
- 尺寸：1200x630 像素
- 格式：JPG 或 PNG
- 内容：包含公司 logo 和主要信息

### 4. 更新网站 URL

将所有 `https://ai-company.com` 替换为实际域名：
- `app/layout.tsx`
- `app/[locale]/layout.tsx`
- `app/sitemap.ts`
- `app/components/StructuredData.tsx`
- `public/robots.txt`

## SEO 最佳实践检查清单

### 内容优化
- [x] 每个页面都有唯一的标题和描述
- [x] 使用相关的关键词（但不过度使用）
- [x] 内容结构清晰，使用 H1-H6 标签
- [x] 图片都有 alt 属性
- [x] 内部链接结构合理

### 技术优化
- [x] 页面加载速度快
- [x] 移动端友好
- [x] HTTPS 加密
- [x] 结构化数据标记
- [x] XML Sitemap
- [x] robots.txt 配置正确

### 多语言 SEO
- [x] hreflang 标签正确配置
- [x] 每种语言都有独立的 URL
- [x] 内容完全本地化

## 提交到搜索引擎

### Google
1. 在 Google Search Console 中提交 sitemap: `https://your-domain.com/sitemap.xml`
2. 请求索引重要页面

### 百度
1. 在百度站长平台中提交 sitemap: `https://your-domain.com/sitemap.xml`
2. 使用"链接提交"功能提交重要页面

### Bing
1. 在 Bing Webmaster Tools 中提交 sitemap
2. 请求索引重要页面

## 监控和维护

### 定期检查
- 每周检查 Google Search Console 和百度站长平台的索引状态
- 监控关键词排名
- 检查页面加载速度
- 更新 sitemap（当有新内容时）

### 性能优化
- 使用 Google PageSpeed Insights 检查页面性能
- 优化图片大小和格式
- 启用浏览器缓存
- 使用 CDN（如果可能）

## 注意事项

1. **不要过度优化**：避免关键词堆砌，保持内容自然
2. **内容质量优先**：高质量内容比技术优化更重要
3. **用户体验**：确保网站对用户友好，搜索引擎会奖励用户体验好的网站
4. **持续更新**：定期更新内容，保持网站活跃度

