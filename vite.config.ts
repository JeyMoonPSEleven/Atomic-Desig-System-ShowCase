import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './design-system') },
      { find: '@/atomic', replacement: path.resolve(__dirname, './design-system/atomic') },
      { find: '@/atoms', replacement: path.resolve(__dirname, './design-system/atomic/atoms') },
      { find: '@/molecules', replacement: path.resolve(__dirname, './design-system/atomic/molecules') },
      { find: '@/organisms', replacement: path.resolve(__dirname, './design-system/atomic/organisms') },
      { find: '@/templates', replacement: path.resolve(__dirname, './design-system/atomic/templates') },
      { find: '@/utils', replacement: path.resolve(__dirname, './design-system/utils') },
      { find: '@/hooks', replacement: path.resolve(__dirname, './design-system/hooks') },
      { find: '@/styles', replacement: path.resolve(__dirname, './design-system/styles') },
      { find: '@/types', replacement: path.resolve(__dirname, './design-system/types') },
      { find: '@/contexts', replacement: path.resolve(__dirname, './design-system/contexts') },
    ],
  },
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});