import Navbar from "@/components/Navbar";
import ButtonLink from "@/components/ButtonLink";
import Title from "@/components/Title";
import { Container } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("404");

    return (
        <div className="flex-col justify-center align-top min-h-screen w-screen bg-black p-5">
            <Navbar />
            <Container 
                display={"flex"}
                flexDirection={"column"}
                mt={10}
                maxW={1200}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Title>{t("notFound")}</Title>
                <ButtonLink
                    href="/"
                    text={t("goHome")}
                />
            </Container>
        </div>
    );
}
