import createMiddleware from "next-intl/middleware";
import { supportedLocales, defaultLocale } from "./i18n";

export default createMiddleware({
    locales: supportedLocales,
    defaultLocale,
});

export const config = {
    matcher: ["/", "/(en|es)/:path*"],
};