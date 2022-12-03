<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Features",
  },
});
</script>

<template>
  <section class="card-grid">
    <ContentSlot :use="$slots.root" />

    <div class="action-title">
      <h2 class="title">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="more">
        <ContentSlot :use="$slots.more" unwrap="" />
      </div>
    </div>
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '.action-title': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '{space.8}',
    },
    '.more': {
      display: 'inline-block',
      marginLeft: 'auto'
    },
    '.title': {
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{text.color.primary}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
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
