import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import MemberSection from "@/components/MemberSection";

const members = [
  /* FORMATO DE CADA MIEMBRO
  {
    image: '',
    title: 'Member 1',
    description: 'Description 1'
  }
  */
  {
    image: '/members/jimy.jpg',
    title: 'Jimy',
    description: 'Jimy is a very cool guy and loves destroying his Lexus.'
  },
  {
    image: '/members/edu.jpg',
    title: 'Edu',
    description: 'Edu is a very cool guy and loves destroying his BMW as well.'
  }
]

function MembersPage() {
  return (
    <div className="flex-col justify-center align-top min-h-screen w-screen bg-black p-5">
      <Navbar />
      <Box
        p={2}
      >
        {members.map((member, index) => (
          <MemberSection
            key={index}
            member={member}
            index={index}
          />
        ))}
      </Box>
    </div>
  );
}

export default MembersPage