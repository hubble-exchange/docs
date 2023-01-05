<script setup lang="ts">
const props = defineProps({
  image: { type: String, required: false },
  icon: { type: String, default: '' },
  to: { type: String, default: '' },
  href: { type: String, default: '' },
  blank: { type: String, default: '' },
})
</script>

<template>
  <div class="py-5">
    <a
      :href="props.href"
      class="relative flex flex-col justify-end w-full bg-cover px-8 py-12 md:h-[433px] rounded-xl text-white"
      :style="{ backgroundImage: `url('${image}')` }"
    >
      <div class="absolute top-7 right-7">
        <Icon class="h-6 w-6 md:h-12 md:w-12" :name="icon || 'uit:arrow-up-right'" />
      </div>
      <div class="w-full">
        <div class="text-sm uppercase mb-5">
          <ContentSlot :use="$slots.storyDate" unwrap="p">
            Cover Story Date
          </ContentSlot>
        </div>
        <h1 class="text-3xl md:text-5xl md:leading-[58px] font-semibold">
          <ContentSlot :use="$slots.coverTitle" unwrap="p">
            Cover Story Title
          </ContentSlot>
        </h1>
        <div v-if="$slots.description" class="text-xl mt-3">
          <ContentSlot :use="$slots.description" unwrap="p">
            Cover Story Description
          </ContentSlot>
        </div>
      </div>
    </a>
  </div>
</template>
