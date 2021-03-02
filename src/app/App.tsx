import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"

import { TranscriptApp } from './TranscriptApp';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="left" p={4} fontSize="xl">
      <TranscriptApp/>
    </Box>
  </ChakraProvider>
)
