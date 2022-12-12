<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <address class="flex items-center justify-center lg:justify-start w-full not-italic">
    <div v-for="(author, index) in page.authors" :key="author" class="flex items-center mr-4 text-sm text-gray-900 dark:text-white">
      <NuxtLink :href="page.avatarLinks[index]" target="_blank">
        <img class="mr-1 max-w-8 md:max-w-12 max-h-8 md:max-h-12 rounded-full" :src="page.avatars[index]" :alt="author">
      </NuxtLink>
      <div class="inline-flex justify-between w-full ml-1">
        <NuxtLink :href="page.avatarLinks[index]" target="_blank">
          <span rel="author" class="text-sm md:text-base font-bold text-gray-900 dark:text-white">
            {{ author }}
          </span>
          <p class="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
            {{ page.positions[index] }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </address>
</template>
