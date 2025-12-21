import { Locale } from "./i18n";

export const aboutData = {
  zh: {
    company: {
      name: "风想云科技",
      founded: "2020",
      location: "北京·中关村",
      employees: "50+",
      clients: "100+",
    },
    mission: "让AI技术普惠每一个企业，用智能驱动业务增长",
    vision: "成为全球领先的AI解决方案提供商",
    values: [
      {
        title: "技术领先",
        description: "始终追求技术创新，保持行业领先地位",
      },
      {
        title: "客户至上",
        description: "以客户需求为中心，提供优质服务",
      },
      {
        title: "开放合作",
        description: "构建开放生态，与合作伙伴共赢",
      },
      {
        title: "持续创新",
        description: "不断探索前沿技术，推动产业发展",
      },
    ],
    advantages: [
      {
        title: "强大的技术团队",
        description: "核心成员来自清华、北大等顶尖高校，具备丰富的AI研发经验",
        stat: "博士占比30%",
      },
      {
        title: "丰富的项目经验",
        description: "服务过金融、医疗、制造、零售等多个行业的百家企业",
        stat: "100+成功案例",
      },
      {
        title: "领先的技术实力",
        description: "掌握深度学习、NLP、计算机视觉等核心AI技术",
        stat: "20+专利技术",
      },
      {
        title: "完善的服务体系",
        description: "提供从咨询、开发到部署的全流程服务",
        stat: "7x24小时支持",
      },
    ],
  },
  en: {
    company: {
      name: "WindThink Cloud Tech",
      founded: "2020",
      location: "Beijing · Zhongguancun",
      employees: "50+",
      clients: "100+",
    },
    mission: "Make AI technology accessible to every enterprise, driving business growth with intelligence",
    vision: "Become a global leading AI solution provider",
    values: [
      {
        title: "Technology Leadership",
        description: "Always pursue technological innovation and maintain industry-leading position",
      },
      {
        title: "Customer First",
        description: "Customer-centric approach, providing quality service",
      },
      {
        title: "Open Cooperation",
        description: "Build an open ecosystem and achieve win-win with partners",
      },
      {
        title: "Continuous Innovation",
        description: "Continuously explore cutting-edge technology and promote industry development",
      },
    ],
    advantages: [
      {
        title: "Strong Technical Team",
        description: "Core members from top universities with rich AI R&D experience",
        stat: "30% PhD Holders",
      },
      {
        title: "Rich Project Experience",
        description: "Served hundreds of enterprises across finance, healthcare, manufacturing, retail and other industries",
        stat: "100+ Success Cases",
      },
      {
        title: "Leading Technical Strength",
        description: "Master core AI technologies including deep learning, NLP, and computer vision",
        stat: "20+ Patented Technologies",
      },
      {
        title: "Comprehensive Service System",
        description: "Provide full-process services from consulting and development to deployment",
        stat: "7x24 Hour Support",
      },
    ],
  },
};

export function getAboutData(locale: Locale) {
  return aboutData[locale] || aboutData.zh;
}

