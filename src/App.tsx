import React from 'react';
import { Carrier } from './pages';
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () =>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Stack spacing={4}>
    <Box width="100wh" height="100vh">
      <AboutMe />
    </Box>
      <Carrier />
      <Skills />
    </Stack>
  </ThemeProvider>

export default App;
