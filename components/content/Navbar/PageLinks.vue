<script setup lang="ts">
const props = defineProps({ showLinkIconOnly: { type: Boolean, default: false } })
const route = useRoute()
const { navBottomLink } = useContentHelpers()
const { navigation } = useContent()
const docus = useDocus()

const hasNavigation = computed(() => !!docus.value.aside?.level)

const filtered = computed(() => docus.value.header?.exclude || [])

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path))
      return false
    return true
  })
})

const isActive = (link: any) => (link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path))
</script>

<template>
  <nav v-if="hasNavigation">
    <ul class="flex items-center justify-center max-w-full overflow-hidden whitespace-nowrap font-medium">
      <li
        v-for="link in tree"
        :key="link._path"
        class="ml-2"
      >
        <NuxtLink
          :to="link.redirect ? link.redirect : navBottomLink(link)"
          class="fv-hide flex items-center text-sm rounded-2.5 whitespace-nowrap py-2 px-4 !hf-text-current dark:hf-bg-gr-blueOxfordMidnightIndigoPurple bgr-border-bppywb-15 common-transition"
          :class="{
            'after:opacity-0 dark:text-gray-romanSilver b-hf-in': !isActive(link),
            'after:opacity-100 dark:text-white  dark:bg-gr-blueOxfordMidnightIndigoPurple bgr-border-bppywb-15': isActive(link),
          }"
        >
          {{ props.showLinkIconOnly ? '' : link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
