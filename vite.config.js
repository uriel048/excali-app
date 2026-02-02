import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // MUITO IMPORTANTE: Garante que os caminhos sejam relativos
})