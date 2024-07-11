import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import MemberSection from "@/components/MemberSection";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";

/**
 * Obtiene los miembros dinámicamente de las traducciones.
 * @param t - La función de traducción.
 * @returns Lista de miembros con su información.
 */
const getMembers = () => {
  const t = useTranslations();
  const members = t.raw("Members");
  console.log("DEBUG: ", members);
  const memberKeys = Object.keys(members).filter((key) => key !== "title" && key !== "meetTheMember");
  return memberKeys.map((key) => ({
    title: key,
    description: members[key].description,
    image: `/members/${key.toLowerCase()}.jpg`,
  }));
};

function MembersPage() {
  const t = useTranslations("Members");
  const members = getMembers();

  return (
    <div className="flex-col justify-center align-top min-h-screen w-screen bg-black p-5">
      <Navbar />
      <Box className="mt-10">
        <Title>{t('title')}</Title>
      </Box>
      <Box p={2}>
        {members.map((member, index) => (
          <MemberSection key={index} member={member} index={index} />
        ))}
      </Box>
    </div>
  );
}

// ToDo: Poner un link en cada miembro para que se pueda ver su perfil (debajo del último </Box>).

export default MembersPage;
