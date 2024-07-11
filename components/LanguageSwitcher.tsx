"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
      <select className="bg-white text-black" onChange={changeLanguage}>
        <option value="en">En</option>
        <option value="es">Es</option>
      </select>
    </div>
  );
}
