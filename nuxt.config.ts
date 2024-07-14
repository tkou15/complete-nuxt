// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    viewer: true, // viewer: { endpoint: '/_tailwind', exportViewer: true }
  },
  imports: {
    dirs: ['stores'],
  },
});
