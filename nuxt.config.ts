export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  content: {
    highlight: {
      // theme: {
      //   // Default theme (same as single string)
      //   default: "github-light",
      //   // Theme used if `html.dark`
      //   dark: "github-dark",
      //   // Theme used if `html.sepia`
      //   sepia: "monokai",
      // },
      preload: ["js", "json", "solidity"],
    },
  },
});
