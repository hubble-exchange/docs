<script setup lang="ts"></script>

<template>
  <blockquote class="quote">
    <ContentSlot class="quote-text" :use="$slots.default" unwrap="p">
      Quote
    </ContentSlot>
  </blockquote>
</template>

<style scoped lang="ts">
css({
  '.quote': {
    display: 'block',
    position: 'relative',
    width: '100%',
    padding: '{space.2} {space.2} {space.3} {space.6}',
    boxShadow: 'inset 2px 0 0 0 rgb(41 41 41)',
    fontStyle: 'oblique',
    '@dark': {
      boxShadow: 'inset 2px 0 0 0 rgb(255 255 255)',
    },
  },
  '.quote-text': {
    margin: '0 !important',
  }
})
</style>
