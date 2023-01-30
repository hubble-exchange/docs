<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Card title' },
  to: { type: String, default: '' },
  target: { type: String, default: undefined },
  icon: { type: String, default: '' },
})
</script>

<template>
  <NuxtLink class="block relative w-full max-h-16 p-1 rounded-xl border border-gray-200 dark:border-gray-900" :to="to" :target="target">
    <div class="w-full flex h-full items-center p-5">
      <div class="title text-base font-semibold leading-3">
        {{ title }}
      </div>
      <Icon class="ml-auto inline-block w-6 h-6" :name="icon || 'uit:arrow-up-right'" />
    </div>
  </NuxtLink>
</template>
