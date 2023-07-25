import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Text,
} from '@mantine/core';

import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './configs/theme';
import ErrorBoundary from './errorBoundary';
// import { Toaster } from 'react-hot-toast';

export default function AppConfig() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const [localColorScheme, setLocalColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
  });
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    setLocalColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  const defaultColorScheme = useColorScheme();
  useEffect(() => {
    if (localColorScheme) {
      setColorScheme(localColorScheme);
    } else {
      setColorScheme(defaultColorScheme);
    }
  }, [defaultColorScheme, localColorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={theme(colorScheme)}
        withGlobalStyles
        withNormalizeCSS
      >
        <ErrorBoundary
          fallback={
            <Text mt="xl" align="center">
              Something went wrong
            </Text>
          }
        >
          {/* <Toaster position="top-left" reverseOrder={false} /> */}
          <App />
        </ErrorBoundary>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AppConfig />
  </QueryClientProvider>
);
