<script setup>
const links = [
  { title: 'Report Bug', link: 'https://hubble.exchange/' },
  { title: 'Give Feedback', link: 'https://feedback.hubble.exchange/bug-fixes' },
  { title: 'Governance', link: 'https://discord.gg/9zJ3SWVxmq' },
  { title: 'Github', link: 'https://github.com/hubble-exchange' },
]
</script>

<template>
  <div>
    <a v-for="item in links" :key="item.title" href="item.link" class="flex items-center text-sm font-medium py-2 px-1 xl:px-4 rd-md dark:text-gray-romanSilver transition ease duration-200 hover:bg-gray-100 dark:hover:(bg-gray-900 text-white)">
      <Icon v-if="item.icon" :name="item.icon" class="mr-2" />
      {{ item.title }}
    </a>
  </div>
</template>
