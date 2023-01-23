import {
  Box,
  Container,
  Flex,
  Image,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

type Props = {};

function NavBar({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w={"full"}
      h={"70px"}
      position={"sticky"}
      top={0}
      backgroundColor={colorMode === "light" ? "white" : "gray.700"}
    >
      <Container maxW="1024px">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Image
            maxW={"100px"}
            src={"https://i.ibb.co/Vg9dsZL/YT-1-removebg-preview.png"}
            alt="YT AI"
          />
          <Switch
            onChange={toggleColorMode}
            isChecked={colorMode === "light" ? false : true}
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default NavBar;
