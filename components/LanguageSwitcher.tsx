"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("LangSwitcher");

  const [currentLang, setCurrentLang] = useState("es");

  useEffect(() => {
    const langInPath = pathname.split("/")[1];
    if (langInPath && langInPath.match(/^[a-z]{2}$/)) {
      setCurrentLang(langInPath);
    }
  }, [pathname]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    const newPathname = `/${selectedLanguage}${pathname.replace(
      /^\/[a-z]{2}/,
      ""
    )}`;
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="fixed bottom-5 left-5 md:bottom-auto md:left-auto md:top-5 md:right-10 z-10">
      <select
        className="bg-black text-white border-2 border-white rounded-lg p-1 shadow-md hover:shadow-white cursor-pointer focus:shadow-white"
        value={currentLang}
        onChange={changeLanguage}
      >
        <option value="es">{t("es")}</option>
        <option value="en">{t("en")}</option>
      </select>
    </div>
  );
}
