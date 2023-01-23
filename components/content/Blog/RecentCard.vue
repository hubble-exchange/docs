<script setup lang="ts">
defineProps({
  to: { type: String, default: '/blogs' },
  icon: { type: String, default: '' },
  iconClass: { type: String, default: '' },
})
</script>

<template>
  <NuxtLink :to="to" class="card block relative w-full p-5 rounded-xl border border-gray-200 dark:(border-gray-900 text-gray-50)">
    <div class="w-full flex pb-6">
      <Icon :name="icon || 'ph:book-open-bold'" />
      <Icon class="ml-auto" :name="icon || 'uit:arrow-up-right'" />
    </div>
    <slot />
    <div>
      <h3 class="mb-3 text-5 leading-7 font-semibold">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <p class="description font-medium text-gray-400">
        <ContentSlot :use="$slots.description" unwrap="p">
          Card description
        </ContentSlot>
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.icon {
  --at-apply: inline-block mb-2 w-6 h-6;
}
</style>
