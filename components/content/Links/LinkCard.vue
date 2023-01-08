<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Card title' },
  to: { type: String, default: '/blogs' },
  target: { type: String, default: undefined },
  icon: { type: String, default: '' },
  blurry: { type: Boolean, default: true, required: false },
})
</script>

<template>
  <NuxtLink :class="{ blurry }" class="card" :to="to" :target="target">
    <div class="w-full flex h-full items-center p-5">
      <div class="title text-base">
        {{ title }}
      </div>
      <Icon class="ml-auto" :name="icon || 'uit:arrow-up-right'" />
    </div>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.card': {
    display: 'block',
    position: 'relative',
    width: '100%',
    maxHeight:'{space.16}',
    padding: '{space.1}',
    borderRadius: '{radii.xl}',
    border: '1px solid {color.gray.200}',
    background: '{backdrop.background}',
    marginBottom:'{space.4}',
    '&:last-child':{
        marginBottom:'{space.0}',
    },
    '@dark': {
      borderColor: '{color.gray.900}',
      color: '{color.gray.50}'
    },
    '&.blurry': {
      backdropFilter: '{backdrop.filter}',
    },
    '.icon': {
      display: 'inline-block',
      width: '{space.6}',
      height: '{space.6}'
    },
    '.title': {

      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.semibold}'
    },
  }
})
</style>
