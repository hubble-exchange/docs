<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: '/blogs',
  },
  icon: {
    type: String,
    default: '',
  },
  iconClass: {
    type: String,
    default: '',
  },
  blurry: {
    type: Boolean,
    default: true,
    required: false,
  },
})
</script>

<template>
  <NuxtLink :class="{ blurry }" class="card" :to="to">
    <div class="w-full flex items-center mb-20">
      <h3 class="title text-6 md:text-10">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <Icon class="ml-auto" :name="icon || 'uit:arrow-up-right'" />
    </div>
    <slot />
    <p class="description">
      <ContentSlot :use="$slots.description" unwrap="p">
        Card description
      </ContentSlot>
    </p>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.card': {
    display: 'block',
    position: 'relative',
    width: '100%',
    padding: '{space.7}',
    borderRadius: '{radii.xl}',
    border: '1px solid {color.gray.200}',
    background: '{backdrop.background}',
    '@dark': {
      borderColor: '{color.gray.900}',
      color: '{color.gray.50}'
    },
    '&.blurry': {
      backdropFilter: '{backdrop.filter}',
    },
    '.icon': {
      display: 'inline-block',
      width: '{space.8}',
      height: '{space.8}',
      '@md': {
        width: '{space.12}',
        height: '{space.12}',
      }
    },
    '.title': {

      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.semibold}'
    },
    '.description': {
      fontSize: '{text.xl.fontSize}',
      lineHeight: '{text.sm.lineHeight}',
      fontWeight: '{fontWeight.medium}',
      '@md': {
        fontSize: '{text.3xl.fontSize}',
      }
    }
  }
})
</style>
