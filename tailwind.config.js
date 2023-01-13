/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ["Raleway", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      cursive: ["Libre Baskerville", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
