"use client";

import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import MemberSection from "@/components/MemberSection";
import { Title } from "@/components/Title";
import { useTranslations } from "next-intl";

const useGetMembers = () => {
  const t = useTranslations();
  const members = t.raw("Members");
  const ignoreKeys = ["title", "meetTheMember", "specs", "media", "specsTitle", "modsTitle"];

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

/* function MembersPage() {
  const t = useTranslations("Members");
  const members = useGetMembers();

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
} */

function MembersPage() {
  const t = useTranslations("Members");
  const tP = useTranslations("Pagination");
  const members = useGetMembers();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(members.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Box className="mt-10">
        <Title>{t("title")}</Title>
      </Box>
      <Box p={2}>
        {currentMembers.map((member, index) => (
          <MemberSection key={index} member={member} index={index} />
        ))}
      </Box>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} mr={2}>
          {tP("previous")}
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {tP("next")}
        </Button>
      </Flex>
    </>
  );
}


export default MembersPage;
