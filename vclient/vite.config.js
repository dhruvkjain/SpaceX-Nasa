import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build:{ 
    outDir: '../server/public',
    emptyOutDir: true,
  },
  plugins: [react()],
})
