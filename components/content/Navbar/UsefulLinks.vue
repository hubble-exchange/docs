<script setup>
import { LINKS } from '~~/config'
const footerTitle = ['Report Bug', 'Governance', 'Github']
const links = LINKS.filter(val => footerTitle.includes(val.title))
</script>

<template>
  <div>
    <a v-for="item in links" :key="item.title" :href="item.href" class="flex items-center text-sm font-medium py-2 px-1 xl:px-4 rd-md dark:text-gray-romanSilver transition ease duration-200 hover:bg-gray-100 dark:hover:(bg-gray-900 text-white)">
      <Icon v-if="item.icon" :name="item.icon" class="mr-2" />
      {{ item.title }}
    </a>
  </div>
</template>
