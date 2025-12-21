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
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const services = getServicesData(locale);
  const cases = getCasesData(locale);
  const techStack = getTechStackData(locale);
  const team = getTeamData(locale);
  const news = getNewsData(locale);
  const about = getAboutData(locale);
  const contact = getContactData(locale);

  return (
    <HomePageClient
      locale={locale}
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

