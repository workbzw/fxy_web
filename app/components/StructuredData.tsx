import { Locale } from "@/lib/i18n";

interface StructuredDataProps {
  locale: Locale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isZh = locale === "zh";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isZh ? "风想云科技" : "WindThink Cloud Tech",
    alternateName: isZh ? "WindThink Cloud Tech" : "风想云科技",
    url: "https://www.helloworld.today",
    logo: "https://www.helloworld.today/cloud-icon.svg",
    description: isZh
      ? "风想云科技专注于为企业提供领先的AI解决方案，包括智能对话系统、计算机视觉、数据分析与预测、AI模型定制开发等服务。"
      : "WindThink Cloud Tech focuses on providing leading AI solutions for enterprises, including intelligent dialogue systems, computer vision, data analysis and prediction, and custom AI model development.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
      addressLocality: "Beijing",
      addressRegion: "Beijing",
      streetAddress: "北京市海淀区中关村大街1号",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-15834544303",
      contactType: "customer service",
      email: "workbzw@gmail.com",
      availableLanguage: ["Chinese", "English"],
    },
    sameAs: [
      "https://github.com/ai-company",
      "https://linkedin.com/company/ai-company",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isZh ? "风想云科技" : "WindThink Cloud Tech",
    url: "https://www.helloworld.today",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.helloworld.today/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: isZh ? "zh-CN" : "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isZh ? "AI解决方案" : "AI Solutions",
    provider: {
      "@type": "Organization",
      name: isZh ? "风想云科技" : "WindThink Cloud Tech",
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.helloworld.today/contact",
      serviceType: "Online",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isZh ? "AI服务" : "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isZh ? "智能对话系统" : "Intelligent Dialogue Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isZh ? "计算机视觉解决方案" : "Computer Vision Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isZh ? "数据分析与预测" : "Data Analysis & Prediction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isZh ? "AI模型定制开发" : "Custom AI Model Development",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}

