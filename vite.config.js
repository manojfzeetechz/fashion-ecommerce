import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
=======
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
>>>>>>> c29b61e635c829d462c3d36556e83f2bb6a13a34
