import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duskies",
  description: "Chase the dusk.",
};

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <div className="flex flex-col min-h-screen bg-black">
            <NextIntlClientProvider messages={messages}>
              <div className="flex-col justify-center align-top min-h-screen w-screen bg-black pb-5">
                <Navbar />
                <LanguageSwitcher />
                {children}
                <Image
                  src="/images/duskiesLogo.png"
                  alt="logo"
                  className="fixed bottom-3 right-3 z-10"
                  width={50}
                  height={50}
                />
              </div>
            </NextIntlClientProvider>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
