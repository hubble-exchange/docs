<script setup lang="ts">
defineProps({ title: { type: String, default: '' }, moreHtml: { type: Boolean, default: false } })
</script>

<template>
  <section class="relative pb-20 sm:pb-24 lg:pb-32">
    <ContentSlot :use="$slots.root" />

    <div class="flex items-center mb-8">
      <h2 class="font-bold text-3xl leading-7.5 tracking-tight sm:(text-4xl leading-9)">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="inline-block ml-auto">
        <ContentSlot v-if="!moreHtml" :use="$slots.more" unwrap="" />
        <slot v-else name="more" />
      </div>
    </div>
    <div class="grid gap-4 font-semibold text-left sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
      <slot />
    </div>
  </section>
</template>
