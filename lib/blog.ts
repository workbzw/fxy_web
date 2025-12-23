import { Locale } from "./i18n";
import fs from "fs";
import path from "path";

// 博客文章类型定义
export interface BlogPost {
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
  coverImage?: string;
  readTime?: number; // 阅读时间（分钟）
}

// 博客数据文件路径
const BLOG_DATA_PATH = path.join(process.cwd(), "data", "blogs.json");

// 确保数据目录存在
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// 读取所有博客文章
export function getAllBlogs(): BlogPost[] {
  ensureDataDir();
  
  if (!fs.existsSync(BLOG_DATA_PATH)) {
    // 返回默认的示例博客数据
    return getDefaultBlogs();
  }
  
  try {
    const data = fs.readFileSync(BLOG_DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("读取博客数据失败:", error);
    return getDefaultBlogs();
  }
}

// 保存博客文章
export function saveBlogs(blogs: BlogPost[]): boolean {
  ensureDataDir();
  
  try {
    fs.writeFileSync(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("保存博客数据失败:", error);
    return false;
  }
}

// 根据 slug 获取博客文章
export function getBlogBySlug(slug: string): BlogPost | null {
  const blogs = getAllBlogs();
  // 尝试直接匹配和 URL 解码后匹配
  const decodedSlug = decodeURIComponent(slug);
  return blogs.find((blog) => blog.slug === slug || blog.slug === decodedSlug) || null;
}

// 根据 ID 获取博客文章
export function getBlogById(id: string): BlogPost | null {
  const blogs = getAllBlogs();
  return blogs.find((blog) => blog.id === id) || null;
}

// 获取已发布的博客文章（根据语言）
export function getPublishedBlogs(locale: Locale): BlogPost[] {
  const blogs = getAllBlogs();
  return blogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 获取本地化的博客数据
export function getLocalizedBlog(blog: BlogPost, locale: Locale) {
  if (locale === "en") {
    return {
      ...blog,
      title: blog.titleEn || blog.title,
      summary: blog.summaryEn || blog.summary,
      content: blog.contentEn || blog.content,
      category: blog.categoryEn || blog.category,
      author: blog.authorEn || blog.author,
      tags: blog.tagsEn || blog.tags,
    };
  }
  return blog;
}

// 创建新博客
export function createBlog(blog: Omit<BlogPost, "id">): BlogPost {
  const blogs = getAllBlogs();
  const newBlog: BlogPost = {
    ...blog,
    id: generateId(),
  };
  blogs.push(newBlog);
  saveBlogs(blogs);
  return newBlog;
}

// 更新博客
export function updateBlog(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const blogs = getAllBlogs();
  const index = blogs.findIndex((blog) => blog.id === id);
  
  if (index === -1) {
    return null;
  }
  
  blogs[index] = {
    ...blogs[index],
    ...updates,
    updatedAt: new Date().toISOString().split("T")[0],
  };
  
  saveBlogs(blogs);
  return blogs[index];
}

// 删除博客
export function deleteBlog(id: string): boolean {
  const blogs = getAllBlogs();
  const index = blogs.findIndex((blog) => blog.id === id);
  
  if (index === -1) {
    return false;
  }
  
  blogs.splice(index, 1);
  saveBlogs(blogs);
  return true;
}

// 生成唯一 ID
function generateId(): string {
  return `blog_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// 计算阅读时间（每分钟 300 字）
export function calculateReadTime(content: string): number {
  const words = content.replace(/[#*`\[\]()]/g, "").length;
  return Math.max(1, Math.ceil(words / 300));
}

// 生成 slug
export function generateSlug(title: string): string {
  // 检查是否包含中文
  const hasChinese = /[\u4e00-\u9fa5]/.test(title);
  
  if (hasChinese) {
    // 对于中文标题，生成基于时间戳的 slug
    const timestamp = Date.now().toString(36);
    const cleanTitle = title
      .replace(/[^\w\u4e00-\u9fa5\s-]/g, "")
      .replace(/\s+/g, "-")
      .substring(0, 20); // 截取前20个字符
    return `post-${timestamp}-${cleanTitle}`;
  }
  
  // 英文标题正常处理
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// 默认博客数据
function getDefaultBlogs(): BlogPost[] {
  return [
    {
      id: "blog_1",
      slug: "company-series-a-funding",
      title: "公司成功完成A轮融资，加速AI技术研发",
      titleEn: "Company Successfully Completes Series A Funding, Accelerates AI Technology R&D",
      summary: "我们很高兴地宣布，公司已成功完成数千万元A轮融资，本轮融资将主要用于核心技术研发、团队建设和市场拓展。",
      summaryEn: "We are pleased to announce that the company has successfully completed tens of millions of yuan in Series A funding, which will primarily be used for core technology R&D, team building, and market expansion.",
      content: `# 公司成功完成A轮融资

我们很高兴地宣布，**风想云科技**已成功完成数千万元A轮融资！

## 融资用途

本轮融资将主要用于以下方面：

1. **核心技术研发** - 加大在大语言模型、多模态AI等前沿技术领域的投入
2. **团队建设** - 引进更多顶尖AI人才，扩充研发团队
3. **市场拓展** - 开拓更多行业应用场景，服务更多企业客户

## 投资方评价

> "风想云科技团队展现了卓越的技术实力和落地能力，我们看好其在企业AI服务领域的发展前景。"

## 下一步计划

- 推出新一代AI开发平台
- 扩大合作伙伴生态
- 探索更多创新应用场景

感谢所有投资人和客户的信任与支持！我们将继续秉持"让AI技术普惠每一个企业"的使命，为客户创造更大价值。`,
      contentEn: `# Company Successfully Completes Series A Funding

We are pleased to announce that **WindThink Cloud Tech** has successfully completed tens of millions of yuan in Series A funding!

## Use of Funds

This round of funding will primarily be used for:

1. **Core Technology R&D** - Increase investment in cutting-edge technologies such as large language models and multimodal AI
2. **Team Building** - Attract top AI talents and expand the R&D team
3. **Market Expansion** - Explore more industry applications and serve more enterprise clients

## Investor Comments

> "The WindThink Cloud Tech team has demonstrated exceptional technical capabilities and implementation abilities. We are optimistic about its development prospects in the enterprise AI service sector."

## Next Steps

- Launch a new generation AI development platform
- Expand partner ecosystem
- Explore more innovative application scenarios

Thank you to all investors and customers for your trust and support! We will continue to uphold our mission of "making AI technology accessible to every enterprise" and create greater value for our customers.`,
      category: "公司动态",
      categoryEn: "Company News",
      author: "风想云科技",
      authorEn: "WindThink Cloud Tech",
      date: "2024-01-15",
      published: true,
      featured: true,
      tags: ["融资", "公司动态", "AI"],
      tagsEn: ["Funding", "Company News", "AI"],
      readTime: 3,
    },
    {
      id: "blog_2",
      slug: "strategic-partnership-ai-lab",
      title: "与某知名企业达成战略合作，共建AI创新实验室",
      titleEn: "Establishes Strategic Partnership with Renowned Enterprise, Jointly Builds AI Innovation Lab",
      summary: "公司与行业领军企业签署战略合作协议，共同建立AI创新实验室，探索AI技术在行业的深度应用。",
      summaryEn: "The company signed a strategic cooperation agreement with an industry-leading enterprise to jointly establish an AI innovation lab and explore the deep application of AI technology in the industry.",
      content: `# 战略合作，共建AI创新实验室

**风想云科技**与行业领军企业正式签署战略合作协议！

## 合作内容

### 1. 共建AI创新实验室
- 联合研发行业专属AI模型
- 探索AI技术在垂直领域的创新应用
- 建立数据共享与安全机制

### 2. 技术共享
\`\`\`
✓ 大语言模型微调技术
✓ 多模态识别能力
✓ 智能决策支持系统
\`\`\`

### 3. 人才培养
| 项目 | 内容 | 周期 |
|------|------|------|
| 技术培训 | AI应用开发 | 3个月 |
| 联合研究 | 前沿技术探索 | 持续 |
| 人才交流 | 双向派驻 | 长期 |

## 预期成果

1. 开发3个以上行业解决方案
2. 发表2篇以上技术论文
3. 申请5项以上发明专利

期待与合作伙伴共同推动AI技术在行业的深度应用！`,
      contentEn: `# Strategic Partnership to Build AI Innovation Lab

**WindThink Cloud Tech** has officially signed a strategic cooperation agreement with an industry-leading enterprise!

## Cooperation Content

### 1. Joint AI Innovation Lab
- Develop industry-specific AI models
- Explore innovative AI applications in vertical fields
- Establish data sharing and security mechanisms

### 2. Technology Sharing
\`\`\`
✓ Large Language Model Fine-tuning
✓ Multimodal Recognition Capabilities
✓ Intelligent Decision Support Systems
\`\`\`

### 3. Talent Development
| Project | Content | Duration |
|---------|---------|----------|
| Technical Training | AI Application Development | 3 months |
| Joint Research | Frontier Technology Exploration | Ongoing |
| Talent Exchange | Bidirectional Assignment | Long-term |

## Expected Outcomes

1. Develop 3+ industry solutions
2. Publish 2+ technical papers
3. Apply for 5+ invention patents

Looking forward to working with our partners to promote the deep application of AI technology in the industry!`,
      category: "合作伙伴",
      categoryEn: "Partnership",
      author: "风想云科技",
      authorEn: "WindThink Cloud Tech",
      date: "2024-02-20",
      published: true,
      tags: ["合作", "AI实验室", "战略"],
      tagsEn: ["Partnership", "AI Lab", "Strategy"],
      readTime: 4,
    },
    {
      id: "blog_3",
      slug: "intelligent-customer-service-award",
      title: "智能客服解决方案荣获行业创新大奖",
      titleEn: "Intelligent Customer Service Solution Wins Industry Innovation Award",
      summary: "公司自主研发的智能客服系统在全国AI应用创新大赛中脱颖而出，荣获一等奖。",
      summaryEn: "The company's independently developed intelligent customer service system stood out in the National AI Application Innovation Competition and won the first prize.",
      content: `# 智能客服解决方案荣获行业创新大奖

在刚刚结束的**全国AI应用创新大赛**中，风想云科技自主研发的智能客服解决方案荣获**一等奖**！

## 产品亮点

### 核心技术优势

- **多轮对话理解**：基于大语言模型的深度语义理解
- **意图识别准确率**：达到 98.5%
- **响应时间**：平均 200ms 以内

### 应用场景

1. 电商客服
2. 金融咨询
3. 政务服务
4. 医疗问诊

## 客户案例

> "接入风想云智能客服后，我们的客服效率提升了80%，客户满意度达到95%以上。"
> —— 某大型电商平台客户服务总监

## 技术架构

\`\`\`mermaid
graph LR
    A[用户输入] --> B[意图识别]
    B --> C[知识检索]
    C --> D[答案生成]
    D --> E[回复用户]
\`\`\`

感谢评委会的认可，我们将继续创新，为客户提供更优质的AI服务！`,
      contentEn: `# Intelligent Customer Service Solution Wins Industry Innovation Award

At the recently concluded **National AI Application Innovation Competition**, WindThink Cloud Tech's independently developed intelligent customer service solution won the **First Prize**!

## Product Highlights

### Core Technical Advantages

- **Multi-turn Dialogue Understanding**: Deep semantic understanding based on large language models
- **Intent Recognition Accuracy**: Reaching 98.5%
- **Response Time**: Average under 200ms

### Application Scenarios

1. E-commerce Customer Service
2. Financial Consulting
3. Government Services
4. Medical Consultation

## Customer Case

> "After integrating WindThink Cloud's intelligent customer service, our service efficiency increased by 80%, and customer satisfaction reached over 95%."
> —— Customer Service Director of a Major E-commerce Platform

## Technical Architecture

\`\`\`mermaid
graph LR
    A[User Input] --> B[Intent Recognition]
    B --> C[Knowledge Retrieval]
    C --> D[Answer Generation]
    D --> E[Reply to User]
\`\`\`

Thanks to the jury for their recognition. We will continue to innovate and provide better AI services to our customers!`,
      category: "荣誉奖项",
      categoryEn: "Honors & Awards",
      author: "风想云科技",
      authorEn: "WindThink Cloud Tech",
      date: "2024-03-10",
      published: true,
      featured: true,
      tags: ["奖项", "智能客服", "创新"],
      tagsEn: ["Award", "Intelligent Customer Service", "Innovation"],
      readTime: 3,
    },
    {
      id: "blog_4",
      slug: "neurips-2024-paper",
      title: "技术团队在国际顶级会议发表论文",
      titleEn: "Technical Team Publishes Paper at International Top Conference",
      summary: "公司研究团队的论文被NeurIPS 2024接收，展示了在多模态学习领域的最新研究成果。",
      summaryEn: "The company's research team's paper was accepted by NeurIPS 2024, showcasing the latest research achievements in the field of multimodal learning.",
      content: `# 论文被NeurIPS 2024接收

我们很高兴地宣布，风想云科技研究团队的论文 **"Unified Multimodal Learning with Cross-Modal Attention"** 已被 **NeurIPS 2024** 接收！

## 论文概述

### 研究背景

多模态学习是当前AI研究的热点领域，如何有效融合不同模态的信息是关键挑战。

### 核心贡献

1. 提出了一种新的跨模态注意力机制
2. 在多个基准数据集上取得SOTA结果
3. 开源了模型代码和预训练权重

### 实验结果

| 数据集 | 之前SOTA | 我们的方法 | 提升 |
|--------|----------|-----------|------|
| VQA v2 | 76.2% | 79.8% | +3.6% |
| NLVR2 | 82.4% | 85.1% | +2.7% |
| Flickr30k | 88.6% | 91.3% | +2.7% |

## 团队寄语

> "这篇论文是团队多年研究积累的成果，也是对我们技术实力的认可。未来我们将继续在前沿技术领域深耕，将研究成果转化为实际产品价值。"

论文预印本和代码即将在 [GitHub](https://github.com) 开源，敬请期待！`,
      contentEn: `# Paper Accepted by NeurIPS 2024

We are pleased to announce that the paper **"Unified Multimodal Learning with Cross-Modal Attention"** by the WindThink Cloud Tech research team has been accepted by **NeurIPS 2024**!

## Paper Overview

### Research Background

Multimodal learning is a hot topic in current AI research, and effectively fusing information from different modalities is a key challenge.

### Core Contributions

1. Proposed a novel cross-modal attention mechanism
2. Achieved SOTA results on multiple benchmark datasets
3. Open-sourced model code and pre-trained weights

### Experimental Results

| Dataset | Previous SOTA | Our Method | Improvement |
|---------|---------------|------------|-------------|
| VQA v2 | 76.2% | 79.8% | +3.6% |
| NLVR2 | 82.4% | 85.1% | +2.7% |
| Flickr30k | 88.6% | 91.3% | +2.7% |

## Team Message

> "This paper is the result of years of research accumulation by our team and a recognition of our technical capabilities. In the future, we will continue to delve into frontier technology fields and transform research achievements into practical product value."

The paper preprint and code will be open-sourced on [GitHub](https://github.com) soon, stay tuned!`,
      category: "技术成果",
      categoryEn: "Technical Achievements",
      author: "风想云科技研究团队",
      authorEn: "WindThink Cloud Tech Research Team",
      date: "2024-04-05",
      published: true,
      tags: ["论文", "NeurIPS", "多模态"],
      tagsEn: ["Paper", "NeurIPS", "Multimodal"],
      readTime: 4,
    },
    {
      id: "blog_5",
      slug: "ai-training-program",
      title: "开设AI技术培训课程，助力人才培养",
      titleEn: "Launches AI Technology Training Courses to Foster Talent",
      summary: "公司启动AI人才培养计划，面向高校学生和行业从业者开放技术培训课程。",
      summaryEn: "The company launched an AI talent training program, offering technical training courses to university students and industry professionals.",
      content: `# AI人才培养计划正式启动

风想云科技正式启动 **"AI种子计划"** 人才培养项目！

## 项目介绍

### 培训内容

1. **基础课程**
   - Python编程基础
   - 机器学习入门
   - 深度学习框架实战

2. **进阶课程**
   - 大语言模型原理与应用
   - 多模态AI技术
   - AI工程化落地实践

3. **实战项目**
   - 智能对话系统开发
   - 计算机视觉应用
   - 数据分析与可视化

### 培训形式

- 线上直播课程
- 录播视频学习
- 导师一对一辅导
- 项目实战演练

## 报名方式

| 项目 | 时间 | 费用 |
|------|------|------|
| 基础班 | 每月开班 | 免费 |
| 进阶班 | 季度开班 | 优惠价 |
| 企业定制 | 灵活安排 | 联系咨询 |

## 往期学员反馈

> "课程内容非常实用，老师讲解清晰，学完后直接上手公司项目，感谢风想云！"

欢迎对AI技术感兴趣的同学和从业者报名参加！`,
      contentEn: `# AI Talent Development Program Officially Launched

WindThink Cloud Tech officially launches the **"AI Seed Program"** talent development project!

## Program Introduction

### Training Content

1. **Basic Courses**
   - Python Programming Fundamentals
   - Introduction to Machine Learning
   - Deep Learning Framework Practice

2. **Advanced Courses**
   - Large Language Model Principles and Applications
   - Multimodal AI Technology
   - AI Engineering Implementation Practice

3. **Practical Projects**
   - Intelligent Dialogue System Development
   - Computer Vision Applications
   - Data Analysis and Visualization

### Training Format

- Live Online Courses
- Recorded Video Learning
- One-on-One Mentoring
- Project Practice Exercises

## Registration

| Program | Schedule | Fee |
|---------|----------|-----|
| Basic Class | Monthly | Free |
| Advanced Class | Quarterly | Discounted |
| Enterprise Custom | Flexible | Contact Us |

## Previous Student Feedback

> "The course content is very practical, the teacher explains clearly, and after learning, I can directly work on company projects. Thanks WindThink Cloud!"

Welcome students and professionals interested in AI technology to sign up!`,
      category: "社会责任",
      categoryEn: "Social Responsibility",
      author: "风想云科技",
      authorEn: "WindThink Cloud Tech",
      date: "2024-05-12",
      published: true,
      tags: ["培训", "人才", "教育"],
      tagsEn: ["Training", "Talent", "Education"],
      readTime: 3,
    },
    {
      id: "blog_6",
      slug: "new-ai-platform-launch",
      title: "新版AI平台正式上线，功能全面升级",
      titleEn: "New Version of AI Platform Officially Launched, Functions Fully Upgraded",
      summary: "公司新一代AI开发平台正式上线，提供更强大的模型训练、部署和管理能力。",
      summaryEn: "The company's new generation AI development platform is officially launched, providing more powerful model training, deployment, and management capabilities.",
      content: `# 新版AI开发平台正式上线

经过数月的精心打磨，风想云科技新一代 **AI开发平台 v2.0** 正式上线！

## 新功能亮点

### 🚀 一键模型训练

\`\`\`python
from fxy_ai import ModelTrainer

trainer = ModelTrainer(
    model_name="gpt-style",
    dataset="custom_data.jsonl"
)
trainer.train(epochs=10)
\`\`\`

### 📊 可视化训练监控

- 实时Loss曲线
- GPU资源监控
- 训练日志查看

### 🔧 灵活部署方案

- 支持CPU/GPU混合部署
- 自动扩缩容
- 多版本灰度发布

### 🛡️ 企业级安全

- 数据加密存储
- 细粒度权限控制
- 审计日志

## 性能提升

| 指标 | v1.0 | v2.0 | 提升 |
|------|------|------|------|
| 训练速度 | 基准 | 2.5x | +150% |
| 推理延迟 | 100ms | 40ms | -60% |
| 资源利用率 | 60% | 85% | +25% |

## 限时福利

🎁 新用户注册即送 **100小时** 免费GPU算力！

立即体验：[https://platform.fxy.ai](https://platform.fxy.ai)`,
      contentEn: `# New AI Development Platform Officially Launched

After months of careful development, WindThink Cloud Tech's new generation **AI Development Platform v2.0** is officially launched!

## New Feature Highlights

### 🚀 One-Click Model Training

\`\`\`python
from fxy_ai import ModelTrainer

trainer = ModelTrainer(
    model_name="gpt-style",
    dataset="custom_data.jsonl"
)
trainer.train(epochs=10)
\`\`\`

### 📊 Visual Training Monitoring

- Real-time Loss Curves
- GPU Resource Monitoring
- Training Log Viewing

### 🔧 Flexible Deployment Solutions

- CPU/GPU Hybrid Deployment Support
- Auto Scaling
- Multi-version Canary Release

### 🛡️ Enterprise-Grade Security

- Encrypted Data Storage
- Fine-grained Permission Control
- Audit Logs

## Performance Improvements

| Metric | v1.0 | v2.0 | Improvement |
|--------|------|------|-------------|
| Training Speed | Baseline | 2.5x | +150% |
| Inference Latency | 100ms | 40ms | -60% |
| Resource Utilization | 60% | 85% | +25% |

## Limited Time Offer

🎁 New users receive **100 hours** of free GPU computing power upon registration!

Try it now: [https://platform.fxy.ai](https://platform.fxy.ai)`,
      category: "产品发布",
      categoryEn: "Product Release",
      author: "风想云科技",
      authorEn: "WindThink Cloud Tech",
      date: "2024-06-18",
      published: true,
      featured: true,
      tags: ["产品", "平台", "发布"],
      tagsEn: ["Product", "Platform", "Release"],
      readTime: 4,
    },
  ];
}

