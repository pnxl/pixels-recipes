import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt DevTools toggle
  devtools: { enabled: true },

  css: [
    "@fontsource/raleway/400.css",
    "@fontsource/raleway/600.css",
    "@fontsource/raleway/700.css",
    "@fontsource/merriweather/700.css",
    "@/assets/css/prism.css",
    "@/assets/css/text.css",
    "@/assets/css/transitions.css",
    "@/assets/fontawesome/css/fontawesome.css",
    "@/assets/fontawesome/css/brands.css",
    "@/assets/fontawesome/css/solid.css",
  ],

  // https://tailwindcss.nuxtjs.org/getting-started/setup
  modules: ["@nuxtjs/tailwindcss"],

  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
});
