"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Locale, getTranslations } from "@/lib/i18n";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineCloud } from "react-icons/hi";

interface NavigationBarProps {
  locale: Locale;
}

export default function NavigationBar({ locale }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = getTranslations(locale);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { id: "services", label: t.sectionServices },
    { id: "cases", label: t.sectionCases },
    { id: "tech", label: t.sectionTech },
    { id: "team", label: t.sectionTeam },
    { id: "news", label: t.sectionNews },
    { id: "about", label: t.sectionAbout },
    { id: "contact", label: t.sectionContact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 检测当前激活的section
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检查

    return () => window.removeEventListener("scroll", handleScroll);
  }, [locale]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#DCEEFF]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-xl font-bold text-[#193A7D] hover:text-[#3483FA] transition group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-[#3483FA] group-hover:text-[#0EA5E9] transition-colors">
              <HiOutlineCloud className="w-6 h-6" />
            </span>
            <span>{t.heroTitle}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-[#3483FA] bg-[#EEF6FF]"
                    : "text-[#52525B] hover:text-[#3483FA] hover:bg-[#EEF6FF]/50"
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* Language Switcher */}
            <div className="ml-2 flex items-center gap-1 border-l border-[#DCEEFF] pl-2">
              {(["zh", "en"] as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    const segments = pathname.split("/").filter(Boolean);
                    if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
                      segments[0] = loc;
                    } else {
                      segments.unshift(loc);
                    }
                    router.push(`/${segments.join("/")}`);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    locale === loc
                      ? "bg-[#3483FA] text-white cursor-default"
                      : "text-[#52525B] hover:bg-[#EEF6FF] cursor-pointer"
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#193A7D] hover:bg-[#EEF6FF] transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#DCEEFF]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-[#3483FA] bg-[#EEF6FF]"
                    : "text-[#52525B] hover:text-[#3483FA] hover:bg-[#EEF6FF]/50"
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="px-4 py-3 border-t border-[#DCEEFF] mt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#71717A]">Language:</span>
                {(["zh", "en"] as Locale[]).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const segments = pathname.split("/").filter(Boolean);
                      if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
                        segments[0] = loc;
                      } else {
                        segments.unshift(loc);
                      }
                      router.push(`/${segments.join("/")}`);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      locale === loc
                        ? "bg-[#3483FA] text-white cursor-default"
                        : "text-[#52525B] hover:bg-[#EEF6FF] cursor-pointer"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

