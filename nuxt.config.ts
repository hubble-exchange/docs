import { createResolver, logger } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  extends: [
    "github:hubble-exchange/content/packages/meta", // static images and fonts
    "@nuxt-themes/docus", // docs theme
  ],

  components: [
    {
      prefix: "",
      path: resolve("./components/content"),
      global: true,
    },
  ],

  content: {
    highlight: {
      // theme: {
      // // Default theme (same as single string)
      //   default: "github-light",
      // // Theme used if `html.dark`
      //   dark: "github-dark",
      // // Theme used if `html.sepia`
      //   sepia: "monokai",
      // },
      preload: ["js", "json", "solidity"],
    },
  },
});
