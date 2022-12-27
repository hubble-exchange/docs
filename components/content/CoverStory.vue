<script setup lang="ts">
defineProps({ image: { type: String, required: false } })
</script>

<template>
  <div class="py-5">
    <div
      class="flex flex-col justify-center items-center w-full bg-cover py-12 md:py-0 md:h-[433px] rounded-xl" :style="{ backgroundImage: `url('${image}')` }"
    >
      <h1 class="text-3xl md:text-6xl md:leading-[65.91px] font-semibold text-center">
        <ContentSlot :use="$slots.coverTitle" unwrap="p">
          Cover Story Title
        </ContentSlot>
      </h1>
      <div v-if="$slots.description" class="text-base md:text-3xl text-center">
        <ContentSlot :use="$slots.description" unwrap="p">
          Cover Story Title
        </ContentSlot>
      </div>
    </div>
  </div>
</template>
