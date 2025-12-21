import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LangSetter from "./components/LangSetter";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-company.com"),
  title: {
    default: "风想云科技 - 专业的AI解决方案提供商",
    template: "%s | 风想云科技",
  },
  description:
    "风想云科技专注于为企业提供领先的AI解决方案，包括智能对话系统、计算机视觉、数据分析与预测、AI模型定制开发等服务。基于大语言模型和深度学习技术，助力企业实现数字化转型与业务创新。",
  keywords: [
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
  ],
  authors: [{ name: "风想云科技" }],
  creator: "风想云科技",
  publisher: "风想云科技",
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
    locale: "zh_CN",
    url: "https://ai-company.com",
    title: "风想云科技 - 专业的AI解决方案提供商",
    description:
      "基于大语言模型和深度学习技术，为企业提供智能化AI解决方案，助力企业实现数字化转型与业务增长",
    siteName: "风想云科技",
  },
  twitter: {
    card: "summary_large_image",
    title: "风想云科技 - 专业的AI解决方案提供商",
    description:
      "基于大语言模型和深度学习技术，为企业提供智能化AI解决方案",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://ai-company.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1E3A8A" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangSetter />
        {children}
      </body>
    </html>
  );
}
