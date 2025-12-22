import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locale === "zh" || locale === "en" ? locale : "zh") as Locale;
  const isZh = validLocale === "zh";

  return {
    metadataBase: new URL("https://www.helloworld.today"),
    title: {
      default: isZh
        ? "风想云科技 - 专业的AI解决方案提供商"
        : "WindThink Cloud Tech - Professional AI Solutions Provider",
      template: isZh ? "%s | 风想云科技" : "%s | WindThink Cloud Tech",
    },
    description: isZh
      ? "风想云科技专注于为企业提供领先的AI解决方案，包括智能对话系统、计算机视觉、数据分析与预测、AI模型定制开发等服务。基于大语言模型和深度学习技术，助力企业实现数字化转型与业务创新。"
      : "WindThink Cloud Tech focuses on providing leading AI solutions for enterprises, including intelligent dialogue systems, computer vision, data analysis and prediction, and custom AI model development. Based on large language models and deep learning technologies, we help enterprises achieve digital transformation and business innovation.",
    keywords: isZh
      ? [
          "AI解决方案",
          "人工智能",
          "大语言模型",
          "深度学习",
          "机器学习",
          "智能对话系统",
          "计算机视觉",
          "数据分析",
          "AI定制开发",
          "企业AI服务",
          "NLP",
          "GPT",
          "风想云科技",
          "AI咨询",
          "数字化转型",
        ]
      : [
          "AI Solutions",
          "Artificial Intelligence",
          "Large Language Models",
          "Deep Learning",
          "Machine Learning",
          "Intelligent Dialogue Systems",
          "Computer Vision",
          "Data Analysis",
          "Custom AI Development",
          "Enterprise AI Services",
          "NLP",
          "GPT",
          "WindThink Cloud Tech",
          "AI Consulting",
          "Digital Transformation",
        ],
    authors: [{ name: isZh ? "风想云科技" : "WindThink Cloud Tech" }],
    creator: isZh ? "风想云科技" : "WindThink Cloud Tech",
    publisher: isZh ? "风想云科技" : "WindThink Cloud Tech",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: isZh ? "zh_CN" : "en_US",
      url: `https://www.helloworld.today/${validLocale}`,
      title: isZh
        ? "风想云科技 - 专业的AI解决方案提供商"
        : "WindThink Cloud Tech - Professional AI Solutions Provider",
      description: isZh
        ? "基于大语言模型和深度学习技术，为企业提供智能化AI解决方案，助力企业实现数字化转型与业务增长"
        : "Providing intelligent AI solutions for enterprises based on large language models and deep learning technologies, helping enterprises achieve digital transformation and business growth",
      siteName: isZh ? "风想云科技" : "WindThink Cloud Tech",
      images: [
        {
          url: "https://www.helloworld.today/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isZh ? "风想云科技" : "WindThink Cloud Tech",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh
        ? "风想云科技 - 专业的AI解决方案提供商"
        : "WindThink Cloud Tech - Professional AI Solutions Provider",
      description: isZh
        ? "基于大语言模型和深度学习技术，为企业提供智能化AI解决方案"
        : "Providing intelligent AI solutions for enterprises based on large language models and deep learning technologies",
      images: ["https://www.helloworld.today/og-image.jpg"],
    },
    alternates: {
      canonical: `https://www.helloworld.today/${validLocale}`,
      languages: {
        "zh-CN": "https://www.helloworld.today/zh",
        "en-US": "https://www.helloworld.today/en",
        "x-default": "https://www.helloworld.today/zh",
      },
    },
    verification: {
      // 百度站长验证 - 需要替换为实际的验证码
      // other: {
      //   "baidu-site-verification": "your-baidu-verification-code",
      // },
      // Google Search Console 验证 - 需要替换为实际的验证码
      // google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === "zh" || locale === "en" ? locale : "zh") as Locale;

  return (
    <>
      <StructuredData locale={validLocale} />
      {children}
    </>
  );
}

