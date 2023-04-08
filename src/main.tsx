import queryClient from '@/configs/queryClient';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './configs/theme';

function toggleColorScheme() {
  const colorScheme = document.body.dataset.mantineColorScheme;
  if (colorScheme === 'light') {
    document.body.dataset.mantineColorScheme = 'dark';
  } else {
    document.body.dataset.mantineColorScheme = 'light';
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme('light')}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <ColorSchemeProvider
          colorScheme="light"
          toggleColorScheme={toggleColorScheme}
        >
          <App />
        </ColorSchemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
