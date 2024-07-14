import { Container, Box, Text, Image, Badge, Link, Button, Icon } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { MemberTitle, MemberSubTitle } from "@/components/Title";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoFacebook } from "react-icons/io";

export default function Member({ params: { profile } }: { params: { profile: string } }) {
    const memberName = profile[0].toUpperCase() + profile.slice(1)
    const t = useTranslations(`Members.${memberName}`);
    const tM = useTranslations(`Members`);
    const instagramLink = t("media.instagram")
    const instagramTag = "@" + instagramLink.split("/")[3]
    const facebookLink = t("media.facebook")
    const facebookTag = "@" + facebookLink.split("/")[3]
    const twitterLink = t("media.twitter")
    const twitterTag = "@" + twitterLink.split("/")[3]
    const youtubeLink = t("media.youtube")
    const youtubeTag = "@" + youtubeLink.split("/")[3]

    // DEBUG
    console.log("Media links: ", instagramLink, facebookLink, twitterLink, youtubeLink);

    const mediaLinks = [instagramLink, facebookLink, twitterLink, youtubeLink];
    const validLinks = mediaLinks.filter(link => link !== "");
    const countValidLinks = validLinks.length;

    console.log("Número de enlaces válidos: ", countValidLinks);

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
                />
                <Box>
                    <Text fontSize="md" color="white" className="mr-4 text-left">
                        <Box className="mb-6">
                            <MemberTitle>{memberName}</MemberTitle>
                        </Box>
                        {t("description")}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam voluptatum maxime quis repellendus enim sequi totam tempora dignissimos temporibus. Rem porro qui hic nobis doloremque vero dicta ipsum laudantium nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eveniet. Repellat non dolorum velit dignissimos quos sint quo maiores, doloribus molestias quidem mollitia officiis cumque repudiandae fugit. Ullam, asperiores accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Text>

                    {countValidLinks > 0 && (
                        <Box
                            display={"flex"}
                            flexWrap={"wrap"}
                            flexDirection={"row"}
                            mt={4}
                        >
                            {instagramLink !== "" && (
                                <Box
                                    margin={"auto"}
                                >
                                    <Link href={instagramLink} target="_blank">
                                        <Button variant="ghost" colorScheme='red' leftIcon={<IoLogoInstagram />}>{instagramTag}</Button>
                                    </Link>
                                </Box>
                            )}
                            {twitterLink !== "" && (
                                <Box
                                    margin={"auto"}
                                >
                                    <Link href={twitterLink} target="_blank">
                                        <Button variant="ghost" colorScheme='red' leftIcon={<IoLogoTwitter />}>{twitterTag}</Button>
                                    </Link>
                                </Box>
                            )}
                            {youtubeLink !== "" && (
                                <Box
                                    margin={"auto"}
                                >
                                    <Link href={youtubeLink} target="_blank">
                                        <Button variant="ghost" colorScheme='red' leftIcon={<IoLogoYoutube />}>{youtubeTag}</Button>
                                    </Link>
                                </Box>
                            )}
                            {facebookLink !== "" && (
                                <Box
                                    margin={"auto"}
                                >
                                    <Link href={facebookLink} target="_blank">
                                        <Button variant="ghost" colorScheme='red' leftIcon={<IoLogoFacebook />}>{facebookTag}</Button>
                                    </Link>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
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
                    <MemberSubTitle>{tM("specsTitle")}</MemberSubTitle>
                </Box>

                <Box
                    textAlign={"center"}
                    display={"flex"}
                    flex={"3"}
                    flexDirection={"row"}
                >
                    <Text
                        fontSize="md"
                        color="white"
                        margin={"auto"}
                    >
                        <Text
                            fontSize="lg"
                            color="white"
                            fontWeight={"bold"}
                        >
                            {tM("specs.engine")}
                        </Text>
                        {t("specs.engine")}
                    </Text>
                    <Text
                        fontSize="md"
                        color="white"
                        margin={"auto"}
                    >
                        <Text
                            fontSize="lg"
                            color="white"
                            fontWeight={"bold"}
                        >
                            {tM("specs.power")}
                        </Text>
                        {t("specs.power")}
                    </Text>
                    <Text
                        fontSize="md"
                        color="white"
                        margin={"auto"}
                    >
                        <Text
                            fontSize="lg"
                            color="white"
                            fontWeight={"bold"}
                        >
                            {tM("specs.torque")}
                        </Text>
                        {t("specs.torque")}
                    </Text>
                </Box>

                <Box
                    className="mt-6 mb-6"
                >
                    <MemberSubTitle>{tM("modsTitle")}</MemberSubTitle>
                </Box>
            </Box>
        </Container>
    );
}