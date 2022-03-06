/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../../styles/global.css";

import theme from "../themes/DefaultTheme";
import { AuthProvider } from "@/contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
