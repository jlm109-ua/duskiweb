"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
const MemberTitle = ({ children, color }: {children: string, color: string}) => {
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
const MemberSection = ({ member, index }: { member: any; index: number }) => {
  const { image, title, description, car, carDescription } = member;
  const isEven = index % 2 === 0;
  const t = useTranslations("Members");

  // Estado para controlar el texto del hover
  const [hovered, setHovered] = useState(false);

  const transition = {
    duration: 0.8,
    delay: index * 0.2,
  } as any; // ToDo: fixear tipado

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      p={4}
      bg={isEven ? "black" : "white"}
    >
      <Flex 
        direction={isEven ? "row-reverse" : "row"} 
        align="center"
      >
        <Box 
            flex="1" 
            mr={isEven ? 0 : 4} 
            ml={isEven ? 4 : 0} 
            display="flex" 
            justifyContent={isEven ? 'flex-end' : 'flex-start' } 
            alignItems={isEven ? 'right' : 'left'}
            _hover={{
                "& img": {
                  boxShadow: "0 0 20px 10px rgba(255, 0, 0, 0.5)",
                },
            }}
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="rounded-sm"
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px 10px rgba(255, 0, 0, 0.5)";
                setHovered(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                setHovered(false);
              }}
        />
        </Box>
        <Box 
            flex="1"
            textAlign={isEven ? 'left' : 'right'}
        >
          <MemberTitle color={isEven ? 'white' : 'black'}>
            {hovered ? car : title}
          </MemberTitle>
          <Text fontSize="md" color={isEven ? 'white' : 'black'}>
            {hovered ? carDescription : description}
          </Text>
          <Text fontSize="md" color={'red'} mt={1}>  
            <Link href={"/members"}>{t('meetTheMember')} <ChevronRightIcon/></Link>
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};

// ToDo: enrutar a la página de perfil de cada miembro.

export default MemberSection;
