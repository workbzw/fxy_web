import { getTranslations, type Locale, locales } from "@/lib/i18n";
import { getServicesData } from "@/lib/data-i18n";
import { getCasesData } from "@/lib/cases-i18n";
import { getTechStackData } from "@/lib/tech-i18n";
import { getTeamData } from "@/lib/team-i18n";
import { getNewsData } from "@/lib/news-i18n";
import { getAboutData } from "@/lib/about-i18n";
import { getContactData } from "@/lib/contact-i18n";
import HomePageClient from "./page-client";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locale === "zh" || locale === "en" ? locale : "zh") as Locale;
  const t = getTranslations(validLocale);
  const services = getServicesData(validLocale);
  const cases = getCasesData(validLocale);
  const techStack = getTechStackData(validLocale);
  const team = getTeamData(validLocale);
  const news = getNewsData(validLocale);
  const about = getAboutData(validLocale);
  const contact = getContactData(validLocale);

  return (
    <HomePageClient
      locale={validLocale}
      translations={t}
      services={services}
      cases={cases}
      techStack={techStack}
      team={team}
      news={news}
      about={about}
      contact={contact}
    />
  );
}

