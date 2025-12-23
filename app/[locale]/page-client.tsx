"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWeixin,
  FaComments,
  FaEye,
  FaChartLine,
  FaCogs,
  FaRobot,
  FaRocket,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaCloud,
} from "react-icons/fa";
import type { Locale } from "@/lib/i18n";
import type { getTranslations } from "@/lib/i18n";
import type { getServicesData } from "@/lib/data-i18n";
import type { getCasesData } from "@/lib/cases-i18n";
import type { getTechStackData } from "@/lib/tech-i18n";
import type { getTeamData } from "@/lib/team-i18n";
import type { getNewsData } from "@/lib/news-i18n";
import type { getAboutData } from "@/lib/about-i18n";
import type { getContactData } from "@/lib/contact-i18n";

const serviceIcons: Record<number, React.ReactNode> = {
  1: <FaComments />,
  2: <FaEye />,
  3: <FaChartLine />,
  4: <FaCogs />,
};

const valueIcons: React.ReactNode[] = [
  <FaRocket />,
  <FaHeart />,
  <FaHandshake />,
  <FaLightbulb />,
];

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type Translations = ReturnType<typeof getTranslations>;
type Services = ReturnType<typeof getServicesData>;
type Cases = ReturnType<typeof getCasesData>;
type TechStack = ReturnType<typeof getTechStackData>;
type Team = ReturnType<typeof getTeamData>;
type News = ReturnType<typeof getNewsData>;
type About = ReturnType<typeof getAboutData>;
type Contact = ReturnType<typeof getContactData>;

export default function HomePageClient({
  locale,
  translations: t,
  services,
  cases,
  techStack,
  team,
  news,
  about,
  contact,
}: {
  locale: Locale;
  translations: Translations;
  services: Services;
  cases: Cases;
  techStack: TechStack;
  team: Team;
  news: News;
  about: About;
  contact: Contact;
}) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF6FF] via-white to-[#F8FAFC] text-[#193A7D]">
      {/* Navigation Bar */}
      <NavigationBar locale={locale} />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD] via-[#EEF6FF] to-white">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3483FA]/5 via-transparent to-[#89C5FF]/10" />
        {/* 云朵效果 */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7DD3FC]/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#BAE6FD]/40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-[#E0F2FE]/50 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-[#7DD3FC]/25 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-32 pb-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:pt-40 lg:pb-28">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-[#1551C4] shadow-soft backdrop-blur border border-[#B8DCFF]/50">
              <span className="h-2 w-2 rounded-full bg-[#3483FA] animate-pulse" />
              {t.heroTagline}
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="relative inline-flex items-center gap-3">
                <span className="text-[#193A7D]">{t.heroTitle}</span>
                <span className="text-[#7DD3FC] opacity-70 animate-pulse">
                  <FaCloud className="text-2xl sm:text-3xl lg:text-4xl" />
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0EA5E9] via-[#3483FA] to-[#1551C4] bg-clip-text text-transparent">
                {t.heroSubtitle}
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-[#52525B]">
              {t.heroDescription}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="btn-primary flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-6 py-3 font-medium shadow-[0_0_25px_rgba(52,131,250,0.4)] transition hover:shadow-[0_0_35px_rgba(52,131,250,0.6)] hover:scale-105"
                style={{ color: "#FFFFFF" }}
              >
                {t.heroCtaPrimary} <FaArrowRight />
              </Link>
              <Link
                href={`/${locale}#services`}
                className="flex items-center gap-2 rounded-full border-2 border-[#3483FA]/30 bg-white/80 px-6 py-3 text-[#1551C4] shadow-soft backdrop-blur hover:border-[#3483FA]/60 hover:bg-[#EEF6FF] transition"
              >
                {t.heroCtaSecondary}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  label: t.heroStats.clients,
                  value: about.company.clients,
                },
                { label: t.heroStats.team, value: about.company.employees },
                { label: t.heroStats.cases, value: t.heroStats.casesValue },
                {
                  label: t.heroStats.industries,
                  value: t.heroStats.industriesValue,
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4 text-center shadow-soft backdrop-blur bg-white/80 border border-[#B8DCFF]/40 hover:border-[#3483FA]/40 hover:shadow-[0_4px_20px_rgba(52,131,250,0.15)] transition"
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-[#3483FA] to-[#1551C4] bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-sm text-[#52525B]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-white/90 p-8 shadow-[0_20px_50px_rgba(52,131,250,0.12)] backdrop-blur border border-[#B8DCFF]/30">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#3483FA]/20 blur-3xl" />
              <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-[#89C5FF]/30 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-white text-xl shadow-[0_4px_15px_rgba(52,131,250,0.4)]">
                    <FaRobot />
                  </span>
                  <div>
                    <p className="text-sm text-[#71717A]">{t.heroCapabilities}</p>
                    <p className="text-lg font-bold text-[#193A7D]">
                      {t.heroCapabilitiesValue}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {t.heroSteps.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-[#DCEEFF] bg-gradient-to-r from-[#EEF6FF] to-white px-4 py-3 shadow-soft hover:border-[#89C5FF] transition"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-sm font-bold text-white shadow-sm">
                        {idx + 1}
                      </div>
                      <p className="text-[#3F3F46] font-medium">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-[#B8DCFF] bg-gradient-to-r from-[#EEF6FF] to-[#DCEEFF] px-4 py-3 text-sm text-[#1551C4] shadow-soft">
                  <span className="font-medium">"{t.heroQuote}"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务 */}
      <Section
        id="services"
        title={t.sectionServices}
        subtitle={t.sectionServicesSubtitle}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-white text-lg shadow-[0_4px_12px_rgba(52,131,250,0.3)]">
                    {serviceIcons[service.id]}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#193A7D]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#71717A] mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-2 rounded-full bg-[#EEF6FF] px-3 py-1 text-xs text-[#1551C4] border border-[#DCEEFF]"
                  >
                    <FaCheckCircle className="text-[#3483FA]" />
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 案例 */}
      <Section id="cases" title={t.sectionCases} subtitle={t.sectionCasesSubtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-[#3483FA] font-medium">
                    {item.industry}
                  </p>
                  <h3 className="text-lg font-bold text-[#193A7D]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#71717A]">{item.description}</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-[#EEF6FF] to-[#DCEEFF] px-3 py-1 text-xs text-[#1551C4] border border-[#B8DCFF]/50">
                  {item.client}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                {Object.entries(item.results).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-xl bg-gradient-to-br from-[#EEF6FF] to-[#DCEEFF] px-3 py-2 text-center border border-[#B8DCFF]/30"
                  >
                    <div className="text-xs uppercase text-[#71717A]">
                      {key}
                    </div>
                    <div className="text-sm font-bold text-[#1551C4]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EEF6FF] px-3 py-1 text-xs text-[#3483FA] border border-[#DCEEFF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 技术栈 */}
      <Section id="tech" title={t.sectionTech} subtitle={t.sectionTechSubtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {techStack.map((stack, idx) => (
            <Card key={stack.category}>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-white text-sm font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#193A7D]">
                  {stack.category}
                </h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#EEF6FF] px-3 py-1 text-xs text-[#1551C4] border border-[#DCEEFF] hover:bg-[#DCEEFF] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 团队 */}
      <Section id="team" title={t.sectionTeam} subtitle={t.sectionTeamSubtitle}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => {
            const displayName = locale === "en" ? member.englishName : member.name;
            const displayInitial = locale === "en" ? member.englishName.charAt(0) : member.name.charAt(0);
            return (
            <Card key={member.id}>
              <div className="flex items-start gap-3">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#3483FA] to-[#1551C4] flex items-center justify-center text-white text-xl font-bold shadow-[0_4px_15px_rgba(52,131,250,0.3)]">
                  {displayInitial}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#193A7D]">
                    {displayName}
                  </h3>
                  <p className="text-sm text-[#3483FA] font-medium">
                    {member.position}
                  </p>
                  <p className="mt-1 text-sm text-[#71717A]">{member.bio}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#EEF6FF] px-3 py-1 text-xs text-[#1551C4] border border-[#DCEEFF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            );
          })}
        </div>
      </Section>

      {/* 新闻 */}
      <Section id="news" title={t.sectionNews} subtitle={t.sectionNewsSubtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {news.map((newsItem) => (
            <Link
              key={newsItem.id}
              href={`/${locale}/blog/${newsItem.slug || `news-${newsItem.id}`}`}
              className="block"
            >
              <Card className="flex flex-col gap-2 cursor-pointer group">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-3 py-1 text-white font-medium">
                    {newsItem.category}
                  </span>
                  <span className="text-[#71717A]">{newsItem.date}</span>
                </div>
                <h3 className="text-base font-bold text-[#193A7D] group-hover:text-[#3483FA] transition-colors">
                  {newsItem.title}
                </h3>
                <p className="text-sm text-[#71717A]">{newsItem.summary}</p>
                <span className="text-sm text-[#3483FA] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {locale === "zh" ? "阅读全文" : "Read More"} <FaArrowRight className="text-xs" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* 关于 */}
      <Section
        id="about"
        title={t.sectionAbout}
        subtitle={t.sectionAboutSubtitle}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-[#193A7D]">
              {t.aboutCompanyInfo}
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <Info label={t.aboutFounded} value={about.company.founded} />
              <Info label={t.aboutLocation} value={about.company.location} />
              <Info
                label={t.aboutTeamSize}
                value={about.company.employees}
              />
              <Info label={t.aboutClients} value={about.company.clients} />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <Info label={t.aboutMission} value={about.mission} />
              <Info label={t.aboutVision} value={about.vision} />
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-[#193A7D]">{t.aboutValues}</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {about.values.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-[#DCEEFF] bg-gradient-to-br from-[#EEF6FF] to-white p-3 shadow-soft hover:border-[#89C5FF] transition"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1551C4]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-white text-xs">
                      {valueIcons[index]}
                    </span>
                    {value.title}
                  </div>
                  <p className="mt-2 text-sm text-[#71717A]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {about.advantages.map((adv) => (
            <Card key={adv.title} className="space-y-1">
              <h4 className="text-sm font-bold text-[#193A7D]">
                {adv.title}
              </h4>
              <p className="text-sm text-[#71717A]">{adv.description}</p>
              <p className="text-sm font-bold bg-gradient-to-r from-[#3483FA] to-[#1551C4] bg-clip-text text-transparent">
                {adv.stat}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 联系 */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#193A7D] via-[#1551C4] to-[#3483FA] py-16">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-10" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#89C5FF]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#FBC529]/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-[#89C5FF] tracking-wide">
              CONTACT US
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.sectionContact}
            </h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-[#FBC529] to-[#F5A50B]" />
            <p className="mt-3 text-[#B8DCFF]">{t.sectionContactSubtitle}</p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur space-y-4">
              <h3 className="text-lg font-bold text-white">{t.contactTitle}</h3>
              <div className="space-y-3 text-sm text-[#DCEEFF]">
                <ContactRow icon={<FaPhone />} value={contact.phone} />
                <ContactRow
                  icon={<FaEnvelope />}
                  value={contact.email}
                />
                <ContactRow
                  icon={<FaMapMarkerAlt />}
                  value={contact.address}
                />
                <ContactRow icon={<FaWeixin />} value={contact.wechat} />
              </div>
              <div className="rounded-xl border border-[#89C5FF]/30 bg-[#3483FA]/30 px-4 py-3 text-sm text-white">
                {t.contactWorkTime}{locale === "zh" ? "：" : ": "}{contact.workTime}
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/20 bg-white p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-lg font-bold text-[#193A7D]">
                {t.contactFormTitle}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t.contactFormName}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
                />
                <input
                  type="text"
                  placeholder={t.contactFormCompany}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
                />
                <input
                  type="email"
                  placeholder={t.contactFormEmail}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
                />
                <input
                  type="tel"
                  placeholder={t.contactFormPhone}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
                />
              </div>
              <textarea
                placeholder={t.contactFormMessage}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[120px] w-full rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 py-2 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
              />
              {submitStatus === "success" && (
                <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  {t.contactFormSuccess}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {t.contactFormError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-4 py-3 text-white font-medium shadow-[0_4px_20px_rgba(52,131,250,0.4)] transition hover:shadow-[0_6px_30px_rgba(52,131,250,0.6)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? t.contactFormSubmitting : t.contactFormSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] border-t border-[#DCEEFF] py-6">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-[#71717A]">
            <p>© {new Date().getFullYear()} {t.heroTitle}. All rights reserved.</p>
            <p>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3483FA] transition-colors"
              >
                京ICP备2022031958号-5
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-6 py-14 sm:px-8 ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-sm font-medium text-[#3483FA] tracking-wide">
          AI SOLUTIONS
        </p>
        <h2 className="text-3xl font-bold text-[#193A7D] sm:text-4xl">
          {title}
        </h2>
        <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-[#3483FA] to-[#89C5FF]" />
        {subtitle && <p className="mt-3 text-[#52525B]">{subtitle}</p>}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        {children}
      </motion.div>
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#DCEEFF] bg-white p-5 shadow-[0_4px_20px_rgba(52,131,250,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(52,131,250,0.15)] hover:border-[#89C5FF] ${className}`}
    >
      {children}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-[#71717A]">{label}</span>
      <span className="h-1 w-1 rounded-full bg-[#B8DCFF]" />
      <span className="font-bold text-[#1551C4]">{value}</span>
    </div>
  );
}

function ContactRow({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-[#89C5FF]">
        {icon}
      </span>
      <span>{value}</span>
    </div>
  );
}

