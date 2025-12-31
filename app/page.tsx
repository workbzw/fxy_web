import { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "风想云科技 - 专业的AI解决方案提供商",
  description:
    "风想云科技专注于为企业提供领先的AI解决方案，包括智能对话系统、计算机视觉、数据分析与预测、AI模型定制开发等服务。",
  alternates: {
    canonical: "https://www.helloworld.today/zh",
    languages: {
      "zh-CN": "https://www.helloworld.today/zh",
      "en-US": "https://www.helloworld.today/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * 根路径页面
 * 使用 301 永久重定向到默认语言版本
 * 这样搜索引擎会知道这是永久性的重定向，不会影响索引
 */
export default function RootPage() {
  // 使用永久重定向（301），告诉搜索引擎这是永久性的
  permanentRedirect(`/${defaultLocale}`);
}
