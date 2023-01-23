import {
  Button,
  Code,
  Text,
  useColorMode,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

type Props = {
  children: string;
};

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" />
    </svg>
  );
};

const ClipBoardText = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  useEffect(() => {
    setValue(children);
  }, []);

  return (
    <Code
      w={"full"}
      backgroundColor={colorMode === "light" ? "#e9ecef" : "blackAlpha.400"}
      px="24px"
      py="24px"
      rounded={"12px"}
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      gap="24px"
    >
      <Text dangerouslySetInnerHTML={{ __html: children }} />
      <Button
        minW={"50px"}
        h={"50px"}
        alignSelf={"flex-start"}
        backgroundColor={colorMode === "light" ? "gray.300" : "gray.600"}
        onClick={() => {
          onCopy();
          toast({
            title: "Copied to clipboard 🎉.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
        }}
      >
        <Icon />
      </Button>
    </Code>
  );
};

export default ClipBoardText;
