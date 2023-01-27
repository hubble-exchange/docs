<script setup lang="ts">
// TODO: remove?
defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
})
const docus = useDocus()
const { navigation, page } = useContent()
const { navKeyFromPath } = useContentHelpers()

const titleTemplate = computed(() => {
  const appTitleTemplate = docus.value.head?.titleTemplate || `%s · ${docus.value.title}`
  if (page.value)
    return page.value.head?.titleTemplate || navKeyFromPath(page.value._path, 'Hubble Exchange', navigation.value || []) || appTitleTemplate

  return appTitleTemplate
})

useHead({
  titleTemplate: titleTemplate.value,
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})

watch(titleTemplate, () => {
  useHead({ titleTemplate: titleTemplate.value })
})

useContentHead(docus.value as any)
</script>

<template>
  <div>
    <AppLoadingBar />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
