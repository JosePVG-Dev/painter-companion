// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  srcDir: '.',
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Paint Like a Wiz',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Paint Like a Wiz - Interactive drawing experience with a magical companion' }
      ]
    }
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/']
    }
  },
  ssr: false,
  vite: {
    plugins: [
      tailwindcss(), 
    ],
    
  },
  modules: ['@pinia/nuxt'],
})