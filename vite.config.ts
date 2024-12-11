import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Added this configuration for getting path from @ to minimise folder path like ./../../xyz
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}],
  }
})
