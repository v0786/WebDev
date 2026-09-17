import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/WebDev/' : '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: false,
    open: false,
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
