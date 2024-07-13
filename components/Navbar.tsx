"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import BurguerButtons from "./BurguerButtons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Index");
  const [MenuState, setMenuState] = useState(true);
  const pathname = usePathname();
  const withoutLocale = pathname.replace(/\/[a-z]{2}/, "");
  const cleanPathname = withoutLocale === "" ? "/" : withoutLocale;

  const navlinks = [
    { name: t("home"), href: "/" },
    { name: t("members"), href: "/members" },
    { name: t("events"), href: "/events" },
    { name: t("contact"), href: "/contact" },
    { name: t("aboutUs"), href: "/about-us" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuState(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BurguerButtons state={MenuState} setState={setMenuState} />
      {MenuState ? (
        <div className="w-full md:block hidden flex-col-reverse">
          <ul className="flex justify-center items-center space-x-12 text-white">
            {navlinks.map((link) => (
              <li key={link.href}>
                <a className="font-medium hover:text-red-700" href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div
            onClick={() => setMenuState(!MenuState)}
            className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center"
          >
            <BurguerButtons state={MenuState} setState={setMenuState} />
            <ul className="flex flex-col justify-center items-center text-white h-4/5 space-y-8">
              {navlinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-lg ${
                      cleanPathname === link.href ? "font-bold text-xl" : ""
                    }`}
                    onClick={() => setMenuState(true)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
