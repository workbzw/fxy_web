import { Locale } from "./i18n";

export const servicesData = {
  zh: [
    {
      id: 1,
      title: "智能对话系统",
      description:
        "基于大语言模型打造智能客服、虚拟助手等对话系统，提升用户体验与服务效率",
      features: ["自然语言理解", "多轮对话", "情感分析", "知识库集成"],
    },
    {
      id: 2,
      title: "计算机视觉解决方案",
      description:
        "提供图像识别、物体检测、人脸识别等视觉AI能力，赋能各行业智能化升级",
      features: ["图像识别", "物体检测", "OCR文字识别", "人脸识别"],
    },
    {
      id: 3,
      title: "数据分析与预测",
      description:
        "运用机器学习算法进行数据挖掘与预测分析，助力企业科学决策",
      features: ["数据挖掘", "预测模型", "异常检测", "智能推荐"],
    },
    {
      id: 4,
      title: "AI模型定制开发",
      description:
        "针对企业特定场景，定制开发专属AI模型，提供端到端的技术支持",
      features: ["需求分析", "模型训练", "部署优化", "持续迭代"],
    },
  ],
  en: [
    {
      id: 1,
      title: "Intelligent Dialogue System",
      description:
        "Build intelligent customer service, virtual assistants and other dialogue systems based on large language models to enhance user experience and service efficiency",
      features: [
        "Natural Language Understanding",
        "Multi-turn Dialogue",
        "Sentiment Analysis",
        "Knowledge Base Integration",
      ],
    },
    {
      id: 2,
      title: "Computer Vision Solutions",
      description:
        "Provide visual AI capabilities such as image recognition, object detection, and facial recognition to empower intelligent upgrades across industries",
      features: [
        "Image Recognition",
        "Object Detection",
        "OCR Text Recognition",
        "Facial Recognition",
      ],
    },
    {
      id: 3,
      title: "Data Analysis & Prediction",
      description:
        "Use machine learning algorithms for data mining and predictive analysis to assist enterprises in scientific decision-making",
      features: [
        "Data Mining",
        "Prediction Models",
        "Anomaly Detection",
        "Intelligent Recommendation",
      ],
    },
    {
      id: 4,
      title: "AI Model Custom Development",
      description:
        "Customize and develop exclusive AI models for specific enterprise scenarios, providing end-to-end technical support",
      features: [
        "Requirements Analysis",
        "Model Training",
        "Deployment Optimization",
        "Continuous Iteration",
      ],
    },
  ],
};

export function getServicesData(locale: Locale) {
  return servicesData[locale] || servicesData.zh;
}

