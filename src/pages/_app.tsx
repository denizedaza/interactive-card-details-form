import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: `'Space Grotesk', 'sans-serif'`,
    heading: `'Space Grotesk', 'sans-serif'`,
  },
  textStyles: {
    h3: {
      letterSpacing: "3600%",
      decoration: "strikethrough",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
