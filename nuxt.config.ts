// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    ["@nuxtjs/google-fonts", { families: { Montserrat: true } }],
    "@nuxt/icon",
  ],
  routeRules: {
    "/detail/**": { ssr: false },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["./assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
});
