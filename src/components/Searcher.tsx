import { getOnly, getResults } from "@/api/getResults";
import { Button, Flex, Input, Spinner, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { MouseEvent } from "react";

type Props = {};

function Searcher({}: Props) {
  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutation(getResults, {
    onSuccess: (data) => {
      let prevData: Array<string> | undefined = queryClient.getQueryData([
        "results",
      ]);
      if (prevData !== undefined) {
        queryClient.setQueryData(["results"], [data, ...prevData]);
      }
    },
    onError: () => {
      toast({
        title: "Something went worng 😣.",
        description: "Try again with another YT link or maybe try latter",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
    },
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.parentNode?.childNodes[0] as HTMLInputElement;
    mutate(value.value);
  };

  return (
    <Flex flexDirection={"column"} alignItems={"stretch"} gap={"32px"}>
      <Flex flexDirection={"row"} gap={"10px"}>
        <Input placeholder={"Insert a YT video link"} />
        <Button onClick={handleSubmit} isDisabled={isLoading}>
          Send
        </Button>
      </Flex>
      {isLoading && (
        <Spinner
          alignSelf={"center"}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red"
          size="xl"
        />
      )}
    </Flex>
  );
}

export default Searcher;
