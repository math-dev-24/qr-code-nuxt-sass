// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/ui'],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/",
      exclude: ['/', "/register", "/login", "/logout"]
    }
  },
  meta: {
    title: 'Nuxt 3 QrCode',
    description: 'Nuxt 3 QrCode',
    lang: 'fr'
  },
  pinia: {
    storesDirs: '~/shared/stores'
  }
})