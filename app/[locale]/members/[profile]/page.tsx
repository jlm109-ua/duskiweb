import { Container, Box, Text, Image } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { MemberTitle, MemberSubTitle } from "@/components/Title";

export default function Member({ params: { profile } }: { params: { profile: string } }) {
    const memberName = profile[0].toUpperCase() + profile.slice(1)
    const t = useTranslations(`Members.${memberName}`);

    return (
        <Container
            maxW={1200}
        >
            <Box
                className="mt-10 w-full"
                display={"flex"}
                flex-wrap={"wrap"}
                textAlign={"left"}
            >
                <Image
                    src={`/members/${memberName}.jpg`}
                    alt={memberName}
                    width={400}
                    height={400}
                    className="float-left"
                    mr={10}
                    border={"1px solid white"}
                //boxShadow={"rgba(255, 255, 255, 0.1) 0px 4px 16px, rgba(255, 255, 255, 0.05) 0px 8px 32px;"}
                />
                <Text
                    fontSize="md"
                    color="white"
                    className="mr-4 text-left"
                >
                    <Box
                        className="mb-6"
                    >
                        <MemberTitle>{memberName}</MemberTitle>
                    </Box>

                    {t("description")}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam voluptatum maxime quis repellendus enim sequi totam tempora dignissimos temporibus. Rem porro qui hic nobis doloremque vero dicta ipsum laudantium nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eveniet. Repellat non dolorum velit dignissimos quos sint quo maiores, doloribus molestias quidem mollitia officiis cumque repudiandae fugit. Ullam, asperiores accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
            </Box>

            <Box>
                <Box
                    className="mt-10 mb-6"
                >
                    <MemberTitle>{t("car")}</MemberTitle>
                </Box>

                <Text
                    fontSize="md"
                    color="white"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate numquam ab vitae consequuntur magni nesciunt dicta explicabo? Eveniet, architecto iste similique aut tenetur exercitationem cum repudiandae amet earum consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate ut at officia ipsum id ullam provident non possimus ad. Nobis, repudiandae officia ut asperiores velit illum rerum perspiciatis nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quod eos perspiciatis eligendi sapiente cupiditate. Ducimus ex qui ut corrupti ipsam consequuntur velit accusantium veritatis vel consectetur. Inventore, reiciendis? Dignissimos.
                </Text>

                <Box
                    className="mt-6 mb-6"
                >
                    <MemberSubTitle>{t("specs")}</MemberSubTitle>
                </Box>

                <Text
                    fontSize="md"
                    color="white"
                >
                    <ul>
                        <li>{t("specs.engine")}</li>
                        <li>{t("specs.power")}</li>
                        <li>{t("specs.torque")}</li>
                    </ul>
                </Text>
            </Box>
        </Container>
    );
}