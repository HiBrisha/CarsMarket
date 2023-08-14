import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
//config port
  server: {
    port: 1125,
  },
//add plugin
  plugins: [react(), tsconfigPaths()],
//aleart when chunk is big
  build: {
    chunkSizeWarningLimit: 2048,
  },
});