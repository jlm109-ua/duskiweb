"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("LangSwitcher");

  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const langInPath = pathname.split('/')[1];
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
    <div>
      <select
        className="bg-white text-black"
        value={currentLang}
        onChange={changeLanguage}
      >
        <option value="en">{t('en')}</option>
        <option value="es">{t('es')}</option>
      </select>
    </div>
  );
}
