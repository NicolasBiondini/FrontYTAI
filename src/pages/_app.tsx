import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
