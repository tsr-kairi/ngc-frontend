/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import Checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      Checker({
        typescript: {
          tsconfigPath:
            command === 'serve' ? './tsconfig.json' : './tsconfig.node.json',
        },
        eslint: {
          lintCommand: 'eslint src --ext .js,.jsx,.ts,.tsx --quiet',
        },
      }),
      isProduction && analyze({ summaryOnly: true }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      sourcemap: isProduction ? false : 'inline',
      minify: isProduction ? 'terser' : false,
      brotliSize: false,
    },
    server: {
      fs: {
        strict: true,
      },
      port: 3000, // run on port 3000
    },
    optimizeDeps: {
      include: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
    },
  };
});
