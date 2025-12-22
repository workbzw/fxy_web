import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";

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
    metadataBase: new URL("https://ai-company.com"),
      title: {
        default: isZh
          ? "风想云科技 - 专业的AI解决方案提供商"
          : "WindThink Cloud Tech - Professional AI Solutions Provider",
        template: isZh ? "%s | 风想云科技" : "%s | WindThink Cloud Tech",
      },
      description: isZh
        ? "风想云科技专注于为企业提供领先的AI解决方案，包括智能对话系统、计算机视觉、数据分析与预测、AI模型定制开发等服务。"
        : "WindThink Cloud Tech focuses on providing leading AI solutions for enterprises, including intelligent dialogue systems, computer vision, data analysis and prediction, and custom AI model development.",
    alternates: {
      canonical: `https://ai-company.com/${locale}`,
      languages: {
        "zh-CN": "https://ai-company.com/zh",
        "en-US": "https://ai-company.com/en",
      },
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
  await params; // 确保 params 被解析，虽然这里不需要使用

  return (
    <>
      {children}
    </>
  );
}

