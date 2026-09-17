import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/WebDev/' : '/',
  plugins: [react()],
  server: {
    port: 5170,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}));

