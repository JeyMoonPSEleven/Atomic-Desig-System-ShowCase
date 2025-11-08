import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './design-system'),
      '@/atomic': path.resolve(__dirname, './design-system/atomic'),
      '@/atoms': path.resolve(__dirname, './design-system/atomic/atoms'),
      '@/molecules': path.resolve(__dirname, './design-system/atomic/molecules'),
      '@/organisms': path.resolve(__dirname, './design-system/atomic/organisms'),
      '@/templates': path.resolve(__dirname, './design-system/atomic/templates'),
      '@/utils': path.resolve(__dirname, './design-system/utils'),
      '@/hooks': path.resolve(__dirname, './design-system/hooks'),
      '@/styles': path.resolve(__dirname, './design-system/styles'),
      '@/types': path.resolve(__dirname, './design-system/types'),
      '@/contexts': path.resolve(__dirname, './design-system/contexts'),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
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

