<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div class="mb-4 text-sm md:text-base text-center lg:text-left">
    <p v-if="!page.updated" class="font-light text-gray-500 dark:text-gray-400">
      Published on <FormatDate :date="new Date(page.created * 1000)" />
    </p>
    <p v-else class="font-light text-gray-500 dark:text-gray-400">
      Updated on <FormatDate :date="new Date(page.updated * 1000)" />
    </p>
  </div>
</template>
