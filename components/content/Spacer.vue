<script setup lang="ts">
defineProps({
  top: { type: String, default: '16px' },
  right: { type: String, default: '16px' },
  bottom: { type: String, default: '16px' },
  left: { type: String, default: '16px' },
})
</script>

<template>
  <div :style="`padding: ${top} ${right} ${bottom} ${left}`" />
</template>
