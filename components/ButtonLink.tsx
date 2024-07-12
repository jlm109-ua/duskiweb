import { Button, Link } from "@chakra-ui/react";

const ButtonLink = ({ href, text}: { href: string; text: string }) => {
    return (
        <Link href={href}>
            <Button 
                colorScheme="black"
                variant="outline"
                color={"white"}
                size="lg" 
                mt={10}
                _hover={{ color: "red" }}
            >
                {text}
            </Button>
        </Link>
    );
}

export default ButtonLink;