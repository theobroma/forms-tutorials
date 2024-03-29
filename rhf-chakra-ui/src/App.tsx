import * as React from 'react';

import {
  Box,
  ChakraProvider,
  // Code,
  Grid,
  // Link,
  // Text,
  theme,
  // VStack,
} from '@chakra-ui/react';

import HookForm from './@components/HookForm';
// import SelectExample from './@components/SelectExample';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack> */}
        {/* ========================== */}
        <HookForm />
        {/* <SelectExample /> */}
      </Grid>
    </Box>
  </ChakraProvider>
);
