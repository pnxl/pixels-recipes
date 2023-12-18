import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt DevTools toggle
  devtools: { enabled: true },

  css: [
    "@fontsource/raleway/400.css",
    "@fontsource/raleway/500.css",
    "@fontsource/raleway/600.css",
    "@fontsource/raleway/700.css",
    "@/assets/css/prism.css",
    "@/assets/css/text.css",
    "@/assets/css/transitions.css",
    "@/assets/fontawesome/css/fontawesome.css",
    "@/assets/fontawesome/css/brands.css",
    "@/assets/fontawesome/css/solid.css",
  ],

  // https://tailwindcss.nuxtjs.org/getting-started/setup
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  // https://github.com/nuxt/nuxt/discussions/16109
  app: {
    head: {
      // shit idfk
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      title: "Pixel’s Recipes",
      meta: [
        // basic meta
        {
          name: "description",
          content:
            "Hi there! I'm Jason - yes, the same Jason on pnxl.dev. This website holds some of my recipes that I've made, I hope you enjoy making them!",
        },
        {
          name: "keywords",
          content:
            "pnxl, recipes, cooking, jason, cookpad, recipe",
        },
        {
          name: "author",
          content: "Jason",
        },

        // ogp
        {
          property: "og:title",
          content: "Pixel’s Recipes",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],

      // Favicons
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "favicon-16x16.png",
        },
        {
          rel: "mask-icon",
          href: "safari-pinned-tab.svg",
          color: "#fac93c",
        },
      ],
    },
  },
});
