<script setup>
const links = [
  { icon: 'gg:website', title: 'Website', link: 'https://hubble.exchange/' },
  { icon: 'fa-brands:twitter', title: 'Twitter', link: 'https://twitter.com/HubbleExchange' },
  { icon: 'fa-brands:discord', title: 'Discord', link: 'https://discord.gg/9zJ3SWVxmq' },
  { icon: 'fa-brands:telegram', title: 'Telegram', link: 'https://t.me/HubbleExchange' },
]
</script>

<template>
  <div class="flex items-center gap-4">
    <a v-for="item in links" :key="item.title" :href="item.link" class="flex items-center underline underline-(1 dotted offset-4) font-medium ">
      <Icon v-if="item.icon" :name="item.icon" class="mr-2" />
      {{ item.title }}
    </a>
  </div>
</template>
