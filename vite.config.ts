import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/WebDev/' : '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: false,
    open: false,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 4173,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));
