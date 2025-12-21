import { Locale } from "./i18n";

export const casesData = {
  zh: [
    {
      id: 1,
      title: "智能客服机器人",
      client: "某电商平台",
      industry: "电商零售",
      description: "为电商平台打造24小时在线智能客服系统，自动回答用户咨询，提升客户满意度",
      tags: ["NLP", "对话系统", "知识图谱"],
      results: {
        efficiency: "客服效率提升70%",
        satisfaction: "用户满意度提升40%",
        cost: "人力成本降低60%",
      },
    },
    {
      id: 2,
      title: "工业质检AI系统",
      client: "某制造企业",
      industry: "制造业",
      description: "基于计算机视觉的自动化质检系统，实时检测产品缺陷，提高质检效率与准确性",
      tags: ["计算机视觉", "缺陷检测", "深度学习"],
      results: {
        accuracy: "检测准确率达99.5%",
        speed: "检测速度提升10倍",
        defect: "缺陷漏检率降低85%",
      },
    },
    {
      id: 3,
      title: "金融风控预测模型",
      client: "某金融科技公司",
      industry: "金融科技",
      description: "构建智能风险预测模型，实时评估信用风险，提升风控能力",
      tags: ["机器学习", "风险评估", "数据分析"],
      results: {
        precision: "风险识别精准度92%",
        reduction: "坏账率降低45%",
        automation: "审批效率提升80%",
      },
    },
    {
      id: 4,
      title: "智能推荐引擎",
      client: "某内容平台",
      industry: "互联网",
      description: "个性化推荐系统，精准匹配用户兴趣，提升内容分发效率和用户粘性",
      tags: ["推荐系统", "协同过滤", "深度学习"],
      results: {
        ctr: "点击率提升55%",
        time: "用户停留时长增加40%",
        retention: "用户留存率提升30%",
      },
    },
    {
      id: 5,
      title: "医疗影像辅助诊断",
      client: "某医疗机构",
      industry: "医疗健康",
      description: "AI辅助医生进行影像诊断，提高诊断准确率和效率",
      tags: ["医疗AI", "图像分割", "病灶检测"],
      results: {
        accuracy: "诊断准确率95%",
        time: "诊断时间缩短60%",
        support: "辅助诊断覆盖率90%",
      },
    },
    {
      id: 6,
      title: "智能语音助手",
      client: "某智能家居企业",
      industry: "智能硬件",
      description: "多功能语音交互系统，支持语音控制、信息查询、智能家居管理等功能",
      tags: ["语音识别", "语音合成", "NLU"],
      results: {
        recognition: "语音识别准确率96%",
        response: "响应速度<500ms",
        commands: "支持500+控制指令",
      },
    },
  ],
  en: [
    {
      id: 1,
      title: "Intelligent Customer Service Robot",
      client: "E-commerce Platform",
      industry: "E-commerce Retail",
      description:
        "Build a 24-hour online intelligent customer service system for e-commerce platforms, automatically answering user inquiries and improving customer satisfaction",
      tags: ["NLP", "Dialogue System", "Knowledge Graph"],
      results: {
        efficiency: "Service efficiency increased by 70%",
        satisfaction: "User satisfaction increased by 40%",
        cost: "Labor cost reduced by 60%",
      },
    },
    {
      id: 2,
      title: "Industrial Quality Inspection AI System",
      client: "Manufacturing Enterprise",
      industry: "Manufacturing",
      description:
        "Automated quality inspection system based on computer vision, real-time detection of product defects, improving quality inspection efficiency and accuracy",
      tags: ["Computer Vision", "Defect Detection", "Deep Learning"],
      results: {
        accuracy: "Detection accuracy reached 99.5%",
        speed: "Detection speed increased by 10x",
        defect: "Defect missed detection rate reduced by 85%",
      },
    },
    {
      id: 3,
      title: "Financial Risk Control Prediction Model",
      client: "FinTech Company",
      industry: "Financial Technology",
      description:
        "Build an intelligent risk prediction model to perform real-time assessment of credit risk and enhance risk control capabilities",
      tags: ["Machine Learning", "Risk Assessment", "Data Analysis"],
      results: {
        precision: "Risk identification accuracy 92%",
        reduction: "Bad debt rate reduced by 45%",
        automation: "Approval efficiency increased by 80%",
      },
    },
    {
      id: 4,
      title: "Intelligent Recommendation Engine",
      client: "Content Platform",
      industry: "Internet",
      description:
        "Personalized recommendation system that accurately matches user interests, improving content distribution efficiency and user stickiness",
      tags: ["Recommendation System", "Collaborative Filtering", "Deep Learning"],
      results: {
        ctr: "Click-through rate increased by 55%",
        time: "User dwell time increased by 40%",
        retention: "User retention rate increased by 30%",
      },
    },
    {
      id: 5,
      title: "Medical Image Assisted Diagnosis",
      client: "Medical Institution",
      industry: "Medical Health",
      description:
        "AI-assisted image diagnosis for doctors, improving diagnosis accuracy and efficiency",
      tags: ["Medical AI", "Image Segmentation", "Lesion Detection"],
      results: {
        accuracy: "Diagnosis accuracy 95%",
        time: "Diagnosis time reduced by 60%",
        support: "Assisted diagnosis coverage 90%",
      },
    },
    {
      id: 6,
      title: "Intelligent Voice Assistant",
      client: "Smart Home Enterprise",
      industry: "Smart Hardware",
      description:
        "Multi-functional voice interaction system supporting voice control, information inquiry, and smart home management",
      tags: ["Speech Recognition", "Speech Synthesis", "NLU"],
      results: {
        recognition: "Speech recognition accuracy 96%",
        response: "Response speed <500ms",
        commands: "Supports 500+ control commands",
      },
    },
  ],
};

export function getCasesData(locale: Locale) {
  return casesData[locale] || casesData.zh;
}

