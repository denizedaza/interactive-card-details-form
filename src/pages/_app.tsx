import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: `'Space Grotesk', 'sans-serif'`,
    heading: `'Space Grotesk', 'sans-serif'`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
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
