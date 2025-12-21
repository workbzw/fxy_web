export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";

export const translations = {
  zh: {
    // Hero
    heroTagline: "智能化 · 可落地 · 面向增长",
    heroTitle: "风想云科技",
    heroSubtitle: "为企业打造可落地的 AI 解决方案",
    heroDescription:
      "专注大语言模型与深度学习，提供咨询、定制开发、部署与运维一体化服务，助力企业完成智能化升级与业务增长。",
    heroCtaPrimary: "预约咨询",
    heroCtaSecondary: "查看方案",
    heroStats: {
      clients: "行业客户",
      team: "团队规模",
      cases: "成功案例",
      industries: "覆盖行业",
      casesValue: "100+ 项",
      industriesValue: "金融/医疗/制造/零售",
    },
    heroCapabilities: "核心能力",
    heroCapabilitiesValue: "LLM + CV + 数据智能",
    heroSteps: ["咨询规划", "模型定制", "工程化落地", "持续优化"],
    heroQuote: "让 AI 技术普惠每一个企业，用智能驱动业务增长。",

    // Sections
    sectionSolutions: "AI SOLUTIONS",
    sectionServices: "核心服务",
    sectionServicesSubtitle: "覆盖对话、视觉、数据智能等全栈能力",
    sectionCases: "成功案例",
    sectionCasesSubtitle: "真实落地，数据可见",
    sectionTech: "技术栈",
    sectionTechSubtitle: "覆盖主流框架与工程化能力",
    sectionTeam: "核心团队",
    sectionTeamSubtitle: "技术与产品并重的专家团队",
    sectionNews: "新闻动态",
    sectionNewsSubtitle: "关注我们的最新进展",
    sectionAbout: "关于我们",
    sectionAboutSubtitle: "使命、愿景与价值观",
    sectionContact: "联系我们",
    sectionContactSubtitle: "快速获得专属 AI 方案",

    // Contact
    contactTitle: "7x24 小时响应",
    contactWorkTime: "工作时间",
    contactFormTitle: "需求快速登记",
    contactFormName: "姓名",
    contactFormCompany: "公司",
    contactFormEmail: "邮箱",
    contactFormPhone: "电话",
    contactFormMessage: "简单描述您的需求或场景",
    contactFormSubmit: "提交需求",
    contactFormSubmitting: "提交中...",
    contactFormSuccess: "提交成功！我们会尽快与您联系。",
    contactFormError: "提交失败，请稍后重试或直接联系我们。",

    // About
    aboutCompanyInfo: "公司信息",
    aboutFounded: "成立时间",
    aboutLocation: "所在地",
    aboutTeamSize: "团队规模",
    aboutClients: "服务客户",
    aboutMission: "使命",
    aboutVision: "愿景",
    aboutValues: "价值观",
  },
  en: {
    // Hero
    heroTagline: "Intelligent · Implementable · Growth-oriented",
    heroTitle: "WindThink Cloud Tech",
    heroSubtitle: "Building Implementable AI Solutions for Enterprises",
    heroDescription:
      "Focusing on large language models and deep learning, providing integrated services for consulting, customized development, deployment, and operation & maintenance, assisting enterprises in achieving intelligent upgrades and business growth.",
    heroCtaPrimary: "Book Consultation",
    heroCtaSecondary: "View Solutions",
    heroStats: {
      clients: "Industry Clients",
      team: "Team Size",
      cases: "Success Cases",
      industries: "Covered Industries",
      casesValue: "100+ Cases",
      industriesValue: "Finance / Healthcare / Manufacturing / Retail",
    },
    heroCapabilities: "Core Capabilities",
    heroCapabilitiesValue: "LLM + CV + Data Intelligence",
    heroSteps: [
      "Consultation & Planning",
      "Model Customization",
      "Engineering Implementation",
      "Continuous Optimization",
    ],
    heroQuote:
      "Make AI technology accessible to every enterprise, driving business growth with intelligence.",

    // Sections
    sectionSolutions: "AI SOLUTIONS",
    sectionServices: "Core Services",
    sectionServicesSubtitle:
      "Full-stack capabilities covering dialogue, vision, and data intelligence",
    sectionCases: "Success Cases",
    sectionCasesSubtitle: "Real implementations with visible results",
    sectionTech: "Tech Stack",
    sectionTechSubtitle: "Covering mainstream frameworks and engineering capabilities",
    sectionTeam: "Core Team",
    sectionTeamSubtitle: "Expert team balancing technology and product",
    sectionNews: "News & Updates",
    sectionNewsSubtitle: "Stay updated with our latest progress",
    sectionAbout: "About Us",
    sectionAboutSubtitle: "Mission, Vision & Values",
    sectionContact: "Contact Us",
    sectionContactSubtitle: "Get Your Exclusive AI Solution Fast",

    // Contact
    contactTitle: "7x24 Hour Response",
    contactWorkTime: "Working Hours",
    contactFormTitle: "Quick Requirement Registration",
    contactFormName: "Name",
    contactFormCompany: "Company",
    contactFormEmail: "Email",
    contactFormPhone: "Phone",
    contactFormMessage: "Briefly describe your requirements or scenario",
    contactFormSubmit: "Submit",
    contactFormSubmitting: "Submitting...",
    contactFormSuccess: "Submitted successfully! We will contact you soon.",
    contactFormError:
      "Submission failed, please try again later or contact us directly.",

    // About
    aboutCompanyInfo: "Company Information",
    aboutFounded: "Founded",
    aboutLocation: "Location",
    aboutTeamSize: "Team Size",
    aboutClients: "Clients Served",
    aboutMission: "Mission",
    aboutVision: "Vision",
    aboutValues: "Values",
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

