import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar(props: {params: {locale: string}}) {
  const t = useTranslations();

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
          <a className="cursor-pointer hover:underline" href="/products">
            {t("products")}
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
          <LanguageSwitcher params={props.params} />
        </li>
      </ul>
    </div>
  );
}
