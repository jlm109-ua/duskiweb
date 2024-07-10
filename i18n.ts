import { getRequestConfig } from "next-intl/server";

export const supportedLocales = ["en", "es"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`./${locale}.json`)).default,
}));