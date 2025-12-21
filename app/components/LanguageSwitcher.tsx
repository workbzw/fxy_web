"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    (pathname.split("/").filter(Boolean)[0] as Locale) || "zh";

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    const newPath = `/${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          disabled={locale === currentLocale}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
            currentLocale === locale
              ? "bg-[#3483FA] text-white shadow-md cursor-default"
              : "bg-white/90 text-[#193A7D] hover:bg-[#EEF6FF] shadow-sm cursor-pointer"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

