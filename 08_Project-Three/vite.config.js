import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),ghPages],
  base: '/React-JS-Learnings/08_Project-Three/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts', // optional setup file
  },
})
