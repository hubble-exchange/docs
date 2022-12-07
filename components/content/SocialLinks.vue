<script setup>
const { data } = await useAsyncData('', () => queryContent('/blogs/_social-plug').findOne())
</script>

<template>
  <ContentRenderer :value="data" />
</template>
