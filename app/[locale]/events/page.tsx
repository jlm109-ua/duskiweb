"use client;"

import { Box, Container, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import { EventList, EventListItem, EventListTitle, EventListIcon, EventListDate } from "@/components/EventsList";

export default function EventsPage() {
    const t = useTranslations("Events");

    return (
        <Container
            maxW={1200}
        >
            <Box className="mt-10">
                <Title>{t("title")}</Title>
            </Box>

            <EventList>
                <EventListItem>
                    <EventListIcon />
                    <EventListTitle>{t("event3.title")}<span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 ms-3">Latest</span></EventListTitle>
                    <EventListDate>{t("event3.date")}</EventListDate>
                    <Text
                        mb={4}
                        color={"white"}
                    >
                        {t("event3.description")}
                    </Text>
                </EventListItem>
                <EventListItem>
                    <EventListIcon />
                    <EventListTitle>{t("event2.title")}</EventListTitle>
                    <EventListDate>{t("event2.date")}</EventListDate>
                    <Text
                        mb={4}
                        color={"white"}
                    >
                        {t("event2.description")}
                    </Text>
                </EventListItem>
                <EventListItem>
                    <EventListIcon />
                    <EventListTitle>{t("event1.title")}</EventListTitle>
                    <EventListDate>{t("event1.date")}</EventListDate>
                    <Text
                        mb={4}
                        color={"white"}
                    >
                        {t("event1.description")}
                    </Text>
                </EventListItem>
            </EventList>
        </Container>
    );
}