// import queryClient from '@/configs/queryClient';
// import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
// import { QueryClientProvider } from '@tanstack/react-query';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import theme from './configs/theme';

// function toggleColorScheme() {
//   const colorScheme = document.body.dataset.mantineColorScheme;
//   if (colorScheme === 'light') {
//     document.body.dataset.mantineColorScheme = 'dark';
//   } else {
//     document.body.dataset.mantineColorScheme = 'light';
//   }
// }

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <MantineProvider
//         theme={theme('light')}
//         withGlobalStyles
//         withNormalizeCSS
//         withCSSVariables
//       >
//         <ColorSchemeProvider
//           colorScheme="light"
//           toggleColorScheme={toggleColorScheme}
//         >
//           <App />
//         </ColorSchemeProvider>
//       </MantineProvider>
//     </QueryClientProvider>
//   </React.StrictMode>
// );

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './configs/theme';

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
        <App />
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
