<script setup lang="ts">
defineProps({ title: { type: String, default: 'Features' }, moreHtml: { type: Boolean, default: false } })
</script>

<template>
  <section class="relative">
    <div class="grid gap-4 font-semibold text-left sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
      <slot />
    </div>
  </section>
</template>
