import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      left={"0"}
      w={"full"}
      h={"30px"}
      backgroundColor={colorMode === "light" ? "gray.300" : "gray.700"}
      display={"flex"}
      justifyItems={"center"}
    >
      <Container
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text>
          Made by{" "}
          <a
            style={{ color: colorMode === "light" ? "#023e8a" : "#00b4d8" }}
            href="https://twitter.com/BiondiniNicolas"
            target={"blank"}
          >
            nbiondini.eth
          </a>{" "}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
