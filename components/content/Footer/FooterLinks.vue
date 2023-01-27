<script lang="ts" setup>
import { LINKS } from '~~/config'
</script>

<template>
  <ul class="flex sm:(flex-nowrap justify-start text-left) flex-wrap justify-center tb:py-0 py-4 font-medium text-sm">
    <li v-for="val in LINKS" :key="val.title">
      <a
        :href="val.href"
        target="_blank"
        rel="noopener noreferrer"
        class="fv-hide rounded-2.5 whitespace-nowrap text-center sm:text-left !px-4 !pt-1.3 !pb-1.5 dark:hf-bg-gr-blueOxfordMidnightIndigoPurple bgr-border-bppywb-15 b-hf-in text-gray-romanSilver !hf-text-current common-transition"
      >
        {{ val.title }}
      </a>
    </li>
  </ul>
</template>
