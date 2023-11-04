import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt DevTools toggle
  devtools: { enabled: true },

  css: [
    "@fontsource/raleway/400.css",
    "@fontsource/raleway/600.css",
    "@fontsource/raleway/700.css",
    "@fontsource/merriweather/300.css",
    "@fontsource/merriweather/700.css",
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
            "Hey! I’m Nadine, an amateur story writer from Indonesia. This is my little website, where it holds some of my works. Keep in mind, I’m still learning on how to write properly but hope to improve in every project! Hope you enjoy reading my works or possibly just looking around! Thank you and have fun. 💛",
        },
        {
          name: "keywords",
          content:
            "nadines, journal, fictional, stories, indonesia, ameteur, writer, story",
        },
        {
          name: "author",
          content: "Nadine",
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
