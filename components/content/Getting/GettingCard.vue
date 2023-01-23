<script setup lang="ts">
defineProps({
  to: { type: String, required: true },
  icon: { type: String, default: '' },
  iconClass: { type: String, default: '' },
})
</script>

<template>
  <NuxtLink class="card flex flex-col relative w-full min-h-214px p-7 rounded-xl border border-gray-200 dark:(border-gray-900 text-gray-50)" :to="to">
    <div class="w-full flex items-center">
      <h3 class="font-semibold leading-3 text-6 md:text-10">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <Icon class="ml-auto inline-block w-8 h-8 md:(w-12 h-12)" :name="icon || 'uit:arrow-up-right'" />
    </div>
    <p class="!mt-auto text-5 font-medium leading-3 md:(text-7.5 leading-7.5)">
      <ContentSlot :use="$slots.description" unwrap="p">
        Card description
      </ContentSlot>
    </p>
  </NuxtLink>
</template>
