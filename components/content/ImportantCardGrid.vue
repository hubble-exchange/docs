<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features',
  },
  moreHtml: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="card-grid">
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      fontWeight: '{fontWeight.semibold}',
      textAlign: 'left',
      color: '{text.color.primary}',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    }
  }
})
</style>
