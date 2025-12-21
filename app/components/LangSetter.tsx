"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    const lang = locale === "en" ? "en-US" : "zh-CN";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [pathname]);

  return null;
}

