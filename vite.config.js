import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    devSourcemap: true,
    modules: {},
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouter: ['react-router-dom'],
        },
      },
    },
  },
});
