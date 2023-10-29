import '@/styles/globals.css'
import { ChakraProvider, CSSReset, Box, Button, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";

// Si vous souhaitez personnaliser le thème de Chakra, vous pouvez le faire ici.
const theme = extendTheme({
  // Vos personnalisations de thème iront ici
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box minHeight="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp;
