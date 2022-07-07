import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import appStoreBadge from "../public/assets/appStore.png";

const ListHeader = () => {
  return <Text color='black' fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
};

function Footer() {
  return (
    <div className="bg-white">
    <Box bg='white' color='gray.800' mb='-8'>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <p className='font-bold'>Company</p>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>airkrypto DAO</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <h3 className='font-bold'>Support</h3>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>How airKrypto works</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <p className='font-bold'>Legal</p>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <p className='font-bold'>Install App</p>
            <Image src={appStoreBadge} alt='/' />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={2}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>This is not a real site </Text>
          <Stack direction={"row"} spacing={6}>
            <div label={"Twitter"} href={"#"}>
              <FaTwitter />
            </div>
            <div label={"YouTube"} href={"#"}>
              <FaYoutube />
            </div>
            <div label={"Instagram"} href={"#"}>
              <FaInstagram />
            </div>
          </Stack>
        </Container>
      </Box>
    </Box>
    </div>
  );
}

export default Footer;
