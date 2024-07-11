import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Index");

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/images/duskiesLogo.png"
          alt="logo"
          className="absolute top-3 left-3"
          width={80}
          height={80}
        />
      </div>
      <ul className="flex justify-center sm:space-x-12 space-x-4 text-white ">
        <li>
          <a className="cursor-pointer hover:underline" href="/">
            {t("home")}
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/members">
            {t("members")}
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/events">
            {t("events")}
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/contact">
            {t("contact")}
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="/about-us">
            {t("aboutUs")}
          </a>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
}
