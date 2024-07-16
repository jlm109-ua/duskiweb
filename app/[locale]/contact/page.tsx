import { Title } from "@/components/Title";
import { Container, Box, Text, Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <Container
            maxW={1200}
        >
            <Box
                className="mt-10 w-full"
            >
                <Title>{t("title")}</Title>
                <Text
                    fontSize="md"
                    mt={6}
                    textAlign={"center"}
                >
                    {t("description")}
                </Text>
            </Box>
        </Container>
    );
}