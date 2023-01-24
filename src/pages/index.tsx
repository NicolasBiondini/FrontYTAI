import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { Container, Heading, Flex, Image } from "@chakra-ui/react";
import Searcher from "@/components/Searcher";
import { getOnly } from "@/api/getResults";
import ClipBoardText from "@/components/ClipBoardText";

export default function Home() {
  const { data: results } = useQuery(["results"], getOnly, {
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <Head>
        <title>YT AI</title>
        <meta
          name="description"
          content="Twitter threads and blog post generated by AI using a YT video."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Image
            src={"https://i.ibb.co/Vg9dsZL/YT-1-removebg-preview.png"}
            alt="YT AI"
          />
          <Flex flexDirection={"column"} gap={"25px"}>
            <Heading as="h4" size="md" textAlign={"center"}>
              Make a blog post or a twitter thread from a YT video!
            </Heading>
            <Searcher />
          </Flex>
          <Flex
            w={"full"}
            gap={"20px"}
            flexDirection="column"
            py={"20px"}
            justifyItems="stretch"
          >
            {results?.map((result: string, index: number) => {
              return (
                <ClipBoardText key={`${result} ${index}`}>
                  {result}
                </ClipBoardText>
              );
            })}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
