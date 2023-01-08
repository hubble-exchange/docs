<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  urls: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const preparedLinks = computed(() => props.urls.map((i: string) => {
  const parts = i.split(' - ')
  return { title: parts[0], link: parts[1], target: parts[2] }
}),
)
</script>

<template>
  <div class="w-full grid gap-5 grid-rows-12 md:grid-cols-12">
    <div class="row-span-12 md:row-span-full md:col-span-6 img-wrapper">
      <slot />
    </div>
    <div class="row-span-6 md:row-span-full md:col-span-6 flex flex-col">
      <LinkCard v-for="t in preparedLinks" :key="t.title" :title="t.title " :to="t.link" :target="t.target" />
    </div>
  </div>
</template>

<style lang="css">
.img-wrapper img,
.img-wrapper p {
  --at-apply: w-full m-0;
}
</style>
