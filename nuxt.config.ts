import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt DevTools toggle
  devtools: { enabled: true },

  css: [
    "@/assets/css/prism.css",
    "@/assets/css/text.css",
    "@/assets/css/transitions.css",
  ],

  // https://tailwindcss.nuxtjs.org/getting-started/setup
  modules: ["@nuxtjs/tailwindcss"],
});
