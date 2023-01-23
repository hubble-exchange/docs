<script setup lang="ts">
const props = defineProps({
  to: { type: String, default: '/blogs' },
  icon: { type: String, default: '' },
  iconClass: { type: String, default: '' },
  image: { type: String, default: '' },
  avatar: { type: String, default: '' },
})
</script>

<template>
  <NuxtLink class="card block relative w-full p-5 rounded-xl border border-gray-200 dark:(border-gray-900 text-gray-50)" :to="to">
    <div class="w-full pb-6">
      <img :src="props.image" :alt="props.image" class="min-h-[190px] object-cover rounded">
    </div>
    <div class="text-xs">
      <ContentSlot :use="$slots.category" unwrap="p">
        Category
      </ContentSlot>
    </div>
    <div class="mt-2 flex items-center">
      <h3 class="mb-3 font-semibold text-xl leading-7 max-w-4/5 truncate">
        <ContentSlot :use="$slots.title" unwrap="p">
          Blog Title
        </ContentSlot>
      </h3>
      <Icon class="ml-auto inline-block mb-2 !w-6 !h-6" :name="icon || 'uit:arrow-up-right'" />
    </div>
    <p class="text-base font-medium text-zinc-400">
      <ContentSlot :use="$slots.description" unwrap="p">
        Short Description
      </ContentSlot>
    </p>
    <div class="flex items-center mt-4">
      <img :src="props.avatar" :alt="props.avatar" class="h-8 w-8 rounded-full">
      <div class="text-xs pl-2.5">
        <div>
          <ContentSlot :use="$slots.postBy" unwrap="p">
            Author
          </ContentSlot>
        </div>
        <div class="text-gray-400">
          <ContentSlot :use="$slots.postDate" unwrap="p">
            Publish Date
          </ContentSlot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
