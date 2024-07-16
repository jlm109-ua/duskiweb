import { Box } from "@chakra-ui/react";
import MemberSection from "@/components/MemberSection";
import { Title } from "@/components/Title";
import { useTranslations } from "next-intl";

/**
 * Obtiene los miembros dinámicamente de las traducciones. Tiene que llamarse useGetMembers por usar una hook en su body.
 * @param t - La función de traducción.
 * @returns Lista de miembros con su información.
 */
const useGetMembers = () => {
  const t = useTranslations();
  const members = t.raw("Members");
  const ignoreKeys = ["title", "meetTheMember", "specs", "media", "specsTitle", "modsTitle"];

  // DEBUG
  // console.log("DEBUG: ", members);

  const memberKeys = Object.keys(members).filter(
    (key) => !ignoreKeys.includes(key)
  );


  return memberKeys.map((key) => ({
    title: key,
    description: members[key].description,
    image: `/members/${key}.jpg`,
    car: members[key].car,
    carDescription: members[key].carDescription,
  }));
};

function MembersPage() {
  const t = useTranslations("Members");
  const members = useGetMembers();

  // DEBUG
  // console.log("DEBUG - MEMBERS: ", members);

  return (
    <>
      <Box className="mt-10">
        <Title>{t("title")}</Title>
      </Box>
      <Box p={2}>
        {members.map((member, index) => (
          <MemberSection key={index} member={member} index={index} />
        ))}
      </Box>
    </>
  );
}

export default MembersPage;
