// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  ssr: false, // disable server-side rendering (GitHub Pages is static)
  app: {
    // 👇 important: must match your repo name
    baseURL: "/",
  },
});
