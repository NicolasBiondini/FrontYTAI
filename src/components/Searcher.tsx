import React, { useState } from "react";
import { getResults } from "@/api/getResults";
import { validateYouTubeUrl } from "@/helpers/ytUrlValidation";
import {
  Button,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Input,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {};

function Searcher({}: Props) {
  const queryClient = useQueryClient();

  const toast = useToast();

  const [form, setForm] = useState({
    link: "",
    twitter: true,
    blog: false,
    lang: "eng",
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateYouTubeUrl(form.link))
      return toast({
        title: "Please, insert a correct YT link 😬.",
        description: "Try again with another YT link.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
    mutate(form);
  };

  return (
    <Flex flexDirection={"column"} alignItems={"stretch"} gap={"32px"}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Flex flexDirection={"row"} gap={"10px"}>
          <Input
            placeholder={"Insert a YT video link"}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />
          <Button type="submit" isDisabled={isLoading}>
            Send
          </Button>
        </Flex>
        <Stack spacing={5} direction="row" alignSelf={"center"}>
          <Checkbox
            colorScheme="red"
            defaultChecked
            onChange={(e) => setForm({ ...form, twitter: e.target.checked })}
          >
            Thread
          </Checkbox>
          <Checkbox
            colorScheme="red"
            onChange={(e) => setForm({ ...form, blog: e.target.checked })}
          >
            Blog Post
          </Checkbox>
          <RadioGroup
            onChange={(e) => setForm({ ...form, lang: e })}
            value={form.lang}
          >
            <Stack direction="row">
              <Radio value="eng" colorScheme={"red"}>
                English
              </Radio>
              <Radio value="es" colorScheme={"red"}>
                Spanish
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </form>
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
