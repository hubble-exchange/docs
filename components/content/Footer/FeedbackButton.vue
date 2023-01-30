<script lang="ts" setup>
import { LINKS } from '~~/config'
const links = LINKS.filter(val => ['Feedback'].includes(val.title))
</script>

<template>
  <a
    :href="links[0].href"
    class="fv-hide flex items-center px-7 py-3 rounded-2.5 whitespace-nowrap bg-gray-cultured dark:(bg-gray-eerieLight hf-bg-gr-blueOxfordMidnightIndigoPurple) text-gray-romanSilver !hf-text-current b-hf-in bgr-border-bppywb-15 common-transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flex items-center">
      <IconWriteFeedback class="mt-[2px]" />
      <span class="ml-1">{{ links[0].title }}</span>
    </div>
  </a>
</template>
