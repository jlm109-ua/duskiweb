"use client";

import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { motion, Transition } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition';
    }})

const MemberSection = ({ member, index }: { member: any, index: number }) => {
    const { image, title, description } = member;
    const isEven = index % 2 === 0;

    const transition: Transition = {
        duration: 0.8,
        delay: index * 0.2
    }

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            //transition={transition}
            mb={8}
            p={4}
            bg="white"
            boxShadow="md"
            borderRadius="md"
        >
            <Flex
                direction={isEven ? 'row-reverse' : 'row'}
                align="center"
            >
                <Box
                    flex="1"
                    mr={isEven ? 0 : 4}
                    ml={isEven ? 4 : 0}
                >
                    <Image
                        src={image}
                        alt={title}
                        borderRadius="md"
                    />
                </Box>
                <Box
                    flex="2"
                >
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.800"
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize="md"
                        color="gray.600"
                    >
                        {description}
                    </Text>
                </Box>
            </Flex>
        </MotionBox>
    )
}

export default MemberSection