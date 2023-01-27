<script setup lang="ts">
const isSettingsPanelOpen = ref(false)
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()

const hasDialog = computed(() => navigation.value?.length > 1)
</script>

<template>
  <header class="pt-5">
    <Container>
      <div
        class="w-full flex items-center border border-gray-200 dark:border-gray-900 rounded-2.5 px-3.5 py-3 shadow-navbar"
      >
        <section class="flex items-center">
          <AppHeaderDialog />
          <NuxtLink class="flex navbar-logo mr-4" to="/" aria-label="Hubble Exchange">
            <Logo />
          </NuxtLink>
          <div class="hidden lg:flex dark:opacity-100 opacity-20 h-6 mr-4 border-(l-2 l-gray-700 t-0 b-0 r-0)" />
        </section>

        <section>
          <AppHeaderLogo v-if="!hasDialog" />
          <PageLinks class="hidden lg:block" />
        </section>

        <section class="ml-auto flex items-center">
          <AppSearch v-if="hasDocSearch" />
          <UsefulLinks class="hidden lg:flex items-center gap-4" />
          <NuxtLink
            to="https://app.hubble.exchange/"
            class="fv-hide flex items-center text-sm font-medium rounded-lg whitespace-nowrap py-2 px-4 ml-2 !hf-text-current border dark:(border-gray-900 hf-bg-gr-blueOxfordMidnightIndigoPurple) bgr-border-bppywb-15 b-hf-in common-transition"
          >
            Launch App
            <Icon class="ml-1.5" name="uit:arrow-up-right" />
          </NuxtLink>
          <ThemeSelect class="items-center text-sm font-medium pr-2 px-4" />
          <span class="lg:hidden">
            <Icon class="text-2xl" name="system-uicons:side-menu" @click="isSettingsPanelOpen = true" />
          </span>
          <MobileLinks v-if="isSettingsPanelOpen" :show="isSettingsPanelOpen" @close="isSettingsPanelOpen = false" />
        </section>
      </div>
    </container>
  </header>
</template>

<style scoped>
.dark header{
  border: none !important;
}
</style>
