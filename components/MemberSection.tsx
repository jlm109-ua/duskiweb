"use client";

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Member {
  image: string;
  title: string;
  description: string;
  car: string;
  carDescription: string;
}

interface CustomTransition {
  duration: number;
  delay: number;
}

/**
 * Componente que permite animaciones con Framer Motion y Chakra UI.
 */
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

/**
 * Componente que muestra el título de un miembro.
 * @param children - El texto del título.
 * @param color - El color del texto.
 */
const MemberTitle = ({
  children,
  color,
}: {
  children: string;
  color: string;
}) => {
  return (
    <Text fontSize="75" fontWeight="bold" color={color}>
      {children}
    </Text>
  );
};

/**
 * Componente que muestra la información de un miembro.
 * @param member - La información del miembro.
 * @param index - El índice del miembro.
 */
const MemberSection = ({
  member,
  index,
}: {
  member: Member;
  index: number;
}) => {
  const { image, title, description, car, carDescription } = member;

  // DEBUG
  // console.log("DEBUG - MEMBER: ", member);
  // console.log("DEBUG - VARIABLES: ", { image, title, description, car, carDescription});

  const isEven = index % 2 === 0;
  const t = useTranslations("Members");
  const imgShadowBlack = "0 0 20px 10px rgba(0, 0, 0, 0.5)";
  const imgShadowWhite = "0 0 20px 10px rgba(255, 255, 255, 0.5)";

  // Estado para controlar el texto del hover
  const [hovered, setHovered] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const transition = {
    duration: 0.8,
    delay: index * 0.2,
  } as any;

  return (
    <Container maxW={1200}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        p={4}
        mb={4}
        bg={isEven ? "black" : "white"}
      >
        <Flex direction={isEven ? "row-reverse" : "row"} align="center">
          <Box
            flex="1"
            mr={isEven ? 0 : 4}
            ml={isEven ? 4 : 0}
            display="flex"
            justifyContent={isEven ? "flex-end" : "flex-start"}
            alignItems={isEven ? "right" : "left"}
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="rounded-sm"
              /* onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isEven
                  ? imgShadowWhite
                  : imgShadowBlack;
                setHovered(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                setHovered(false);
              }} */
            />
          </Box>
          <Box flex="1" textAlign={isEven ? "left" : "right"}>
            <MemberTitle color={isEven ? "white" : "black"}>
              {hovered ? car : title}
            </MemberTitle>
            <Text fontSize="md" color={isEven ? "white" : "black"}>
              {hovered ? carDescription : description}
            </Text>
            <Text fontSize="md" color={"red"} mt={1}>
              <Link href={`/${locale}/members/${title.toLowerCase()}`}>
                {t("meetTheMember")} <ChevronRightIcon />
              </Link>
            </Text>
          </Box>
        </Flex>
      </MotionBox>
    </Container>
  );
};

// ToDo: enrutar a la página de perfil de cada miembro.

export default MemberSection;
