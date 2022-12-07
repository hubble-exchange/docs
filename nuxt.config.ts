import { createResolver } from '@nuxt/kit'
import { defineNuxtConfig } from 'nuxt/config'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    'github:hubble-exchange/content/packages/meta', // static images and fonts
    '@nuxt-themes/docus', // docs theme
  ],

  css: ['@/assets/css/main.css'],

  components: [
    {
      prefix: '',
      path: resolve('./components/content'),
      global: true,
    },
  ],
  colorMode: {
    preference: 'dark',
  },
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
      preload: ['js', 'json', 'solidity'],
    },
  },
})
