import { Locale } from "./i18n";

export const techStackData = {
  zh: [
    {
      category: "深度学习框架",
      items: ["PyTorch", "TensorFlow", "JAX", "PaddlePaddle"],
    },
    {
      category: "大语言模型",
      items: ["GPT-4", "Claude", "LLaMA", "ChatGLM"],
    },
    {
      category: "计算机视觉",
      items: ["OpenCV", "YOLO", "ResNet", "Vision Transformer"],
    },
    {
      category: "自然语言处理",
      items: ["BERT", "Transformer", "Word2Vec", "SpaCy"],
    },
    {
      category: "机器学习",
      items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
    },
    {
      category: "部署与运维",
      items: ["Docker", "Kubernetes", "TensorRT", "ONNX"],
    },
  ],
  en: [
    {
      category: "Deep Learning Frameworks",
      items: ["PyTorch", "TensorFlow", "JAX", "PaddlePaddle"],
    },
    {
      category: "Large Language Models",
      items: ["GPT-4", "Claude", "LLaMA", "ChatGLM"],
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "YOLO", "ResNet", "Vision Transformer"],
    },
    {
      category: "Natural Language Processing",
      items: ["BERT", "Transformer", "Word2Vec", "SpaCy"],
    },
    {
      category: "Machine Learning",
      items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
    },
    {
      category: "Deployment & Operations",
      items: ["Docker", "Kubernetes", "TensorRT", "ONNX"],
    },
  ],
};

export function getTechStackData(locale: Locale) {
  return techStackData[locale] || techStackData.zh;
}

