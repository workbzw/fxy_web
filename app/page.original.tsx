"use client";

import {
  servicesData,
  casesData,
  teamData,
  newsData,
  aboutData,
  contactData,
  techStackData,
} from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWeixin,
  FaGlobe,
  FaComments,
  FaEye,
  FaChartLine,
  FaCogs,
  FaRobot,
} from "react-icons/fa";

const serviceIcons: Record<number, React.ReactNode> = {
  1: <FaComments />,
  2: <FaEye />,
  3: <FaChartLine />,
  4: <FaCogs />,
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF6FF] via-white to-[#F8FAFC] text-[#193A7D]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF6FF] via-[#DCEEFF] to-white">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3483FA]/5 via-transparent to-[#89C5FF]/10" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#3483FA]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#89C5FF]/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-[#1551C4] shadow-soft backdrop-blur border border-[#B8DCFF]/50">
              <span className="h-2 w-2 rounded-full bg-[#3483FA] animate-pulse" />
              智能化 · 可落地 · 面向增长
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#193A7D]">智创AI科技</span>
              <br />
              <span className="bg-gradient-to-r from-[#3483FA] to-[#1551C4] bg-clip-text text-transparent">为企业打造可落地的 AI 解决方案</span>
            </h1>
            <p className="max-w-2xl text-lg text-[#52525B]">
              专注大语言模型与深度学习，提供咨询、定制开发、部署与运维一体化服务，助力企业完成智能化升级与业务增长。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="btn-primary flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-6 py-3 font-medium shadow-[0_0_25px_rgba(52,131,250,0.4)] transition hover:shadow-[0_0_35px_rgba(52,131,250,0.6)] hover:scale-105"
                style={{ color: '#FFFFFF' }}
              >
                预约咨询 <FaArrowRight />
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-2 rounded-full border-2 border-[#3483FA]/30 bg-white/80 px-6 py-3 text-[#1551C4] shadow-soft backdrop-blur hover:border-[#3483FA]/60 hover:bg-[#EEF6FF] transition"
              >
                查看方案
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "行业客户", value: aboutData.company.clients },
                { label: "团队规模", value: aboutData.company.employees },
                { label: "成功案例", value: "100+ 项" },
                { label: "覆盖行业", value: "金融/医疗/制造/零售" },
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
                    <p className="text-sm text-[#71717A]">核心能力</p>
                    <p className="text-lg font-bold text-[#193A7D]">
                      LLM + CV + 数据智能
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {["咨询规划", "模型定制", "工程化落地", "持续优化"].map(
                    (step, idx) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-xl border border-[#DCEEFF] bg-gradient-to-r from-[#EEF6FF] to-white px-4 py-3 shadow-soft hover:border-[#89C5FF] transition"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3483FA] to-[#1551C4] text-sm font-bold text-white shadow-sm">
                          {idx + 1}
                        </div>
                        <p className="text-[#3F3F46] font-medium">{step}</p>
                      </div>
                    )
                  )}
                </div>
                <div className="rounded-xl border border-[#B8DCFF] bg-gradient-to-r from-[#EEF6FF] to-[#DCEEFF] px-4 py-3 text-sm text-[#1551C4] shadow-soft">
                  <span className="font-medium">"让 AI 技术普惠每一个企业，用智能驱动业务增长。"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务 */}
      <Section id="services" title="核心服务" subtitle="覆盖对话、视觉、数据智能等全栈能力">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
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
      <Section id="cases" title="成功案例" subtitle="真实落地，数据可见">
        <div className="grid gap-6 md:grid-cols-2">
          {casesData.map((item) => (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-[#3483FA] font-medium">{item.industry}</p>
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
      <Section id="tech" title="技术栈" subtitle="覆盖主流框架与工程化能力">
        <div className="grid gap-4 md:grid-cols-3">
          {techStackData.map((stack, idx) => (
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
      <Section id="team" title="核心团队" subtitle="技术与产品并重的专家团队">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <Card key={member.id}>
              <div className="flex items-start gap-3">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#3483FA] to-[#1551C4] flex items-center justify-center text-white text-xl font-bold shadow-[0_4px_15px_rgba(52,131,250,0.3)]">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#193A7D]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#3483FA] font-medium">{member.position}</p>
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
          ))}
        </div>
      </Section>

      {/* 新闻 */}
      <Section id="news" title="新闻动态" subtitle="关注我们的最新进展">
        <div className="grid gap-4 md:grid-cols-2">
          {newsData.map((news) => (
            <Card key={news.id} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-3 py-1 text-white font-medium">
                  {news.category}
                </span>
                <span className="text-[#71717A]">{news.date}</span>
              </div>
              <h3 className="text-base font-bold text-[#193A7D]">
                {news.title}
              </h3>
              <p className="text-sm text-[#71717A]">{news.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 关于 */}
      <Section id="about" title="关于我们" subtitle="使命、愿景与价值观">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-[#193A7D]">
              公司信息
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <Info label="成立时间" value={aboutData.company.founded} />
              <Info label="所在地" value={aboutData.company.location} />
              <Info label="团队规模" value={aboutData.company.employees} />
              <Info label="服务客户" value={aboutData.company.clients} />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <Info label="使命" value={aboutData.mission} />
              <Info label="愿景" value={aboutData.vision} />
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-[#193A7D]">价值观</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {aboutData.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-[#DCEEFF] bg-gradient-to-br from-[#EEF6FF] to-white p-3 shadow-soft hover:border-[#89C5FF] transition"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1551C4]">
                    <span>{value.icon}</span>
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
          {aboutData.advantages.map((adv) => (
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#193A7D] via-[#1551C4] to-[#3483FA] py-16">
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
            <p className="text-sm font-medium text-[#89C5FF] tracking-wide">CONTACT US</p>
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">联系我们</h2>
              <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#FBC529] to-[#F5A50B]" />
            </div>
            <p className="mt-2 text-[#B8DCFF]">快速获得专属 AI 方案</p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur space-y-4">
              <h3 className="text-lg font-bold text-white">
                7x24 小时响应
              </h3>
              <div className="space-y-3 text-sm text-[#DCEEFF]">
                <ContactRow icon={<FaPhone />} value={contactData.phone} />
                <ContactRow icon={<FaEnvelope />} value={contactData.email} />
                <ContactRow icon={<FaMapMarkerAlt />} value={contactData.address} />
                <ContactRow icon={<FaWeixin />} value={contactData.wechat} />
                <ContactRow icon={<FaGlobe />} value={contactData.socialMedia.weibo} />
                <ContactRow icon={<FaGlobe />} value={contactData.socialMedia.linkedin} />
              </div>
              <div className="rounded-xl border border-[#89C5FF]/30 bg-[#3483FA]/30 px-4 py-3 text-sm text-white">
                工作时间：{contactData.workTime}
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <h3 className="text-lg font-bold text-[#193A7D]">
                需求快速登记
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {["姓名", "公司", "邮箱", "电话"].map((label) => (
                  <input
                    key={label}
                    placeholder={label}
                    className="h-11 rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
                  />
                ))}
              </div>
              <textarea
                placeholder="简单描述您的需求或场景"
                className="min-h-[120px] w-full rounded-xl border border-[#DCEEFF] bg-[#EEF6FF]/50 px-3 py-2 text-sm text-[#193A7D] outline-none transition focus:border-[#3483FA] focus:ring-2 focus:ring-[#DCEEFF] placeholder:text-[#A1A1AA]"
              />
              <button className="w-full rounded-full bg-gradient-to-r from-[#3483FA] to-[#1551C4] px-4 py-3 text-white font-medium shadow-[0_4px_20px_rgba(52,131,250,0.4)] transition hover:shadow-[0_6px_30px_rgba(52,131,250,0.6)] hover:scale-[1.02]">
                提交需求
              </button>
            </div>
          </div>
        </div>
      </section>
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
    <section id={id} className={`mx-auto max-w-6xl px-6 py-14 sm:px-8 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-sm font-medium text-[#3483FA] tracking-wide">AI SOLUTIONS</p>
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
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-[#89C5FF]">{icon}</span>
      <span>{value}</span>
    </div>
  );
}
