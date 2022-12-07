<script setup lang="ts">
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()
const docus = useDocus()

const hasDialog = computed(() => navigation.value?.length > 1)
const isLargeScreen = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <header :class="{ 'has-dialog': hasDialog, 'has-doc-search': hasDocSearch }">
    <Container>
      <section class="left">
        <AppHeaderDialog />
        <NuxtLink class="navbar-logo" to="/" :aria-label="docus?.header?.title">
          <Logo />
        </NuxtLink>
      </section>

      <section class="center">
        <!-- <AppHeaderLogo v-if="!hasDialog" /> -->
        <AppHeaderNavigation :show-link-icon-only="isLargeScreen" />
      </section>

      <section class="right">
        <AppSearch v-if="hasDocSearch" />
        <ThemeSelect />
        <div class="socials">
          <AppSocialIcons />
        </div>
      </section>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}'
  },

  '.navbar-logo': {
    display: 'flex',
    alignItems: 'center'
  //   '.left &': {
  //     '.has-dialog &': {
  //       display: 'none',
  //       '@lg': {
  //         display: 'block'
  //       }
  //     },
  //   },
  //   '.center &': {
  //     display: 'block',
  //     '@lg': {
  //       display: 'none'
  //     }
  //   }
  },

  '.socials': {
    display: 'none',
    '@md': {
      display: 'flex',
      gap: 'var(--space-4)',
    }
  },

  header: {
    backdropFilter: '{backdrop.filter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottom: '1px solid {color.gray.100}',
    backgroundColor: '{backdrop.background}',
    height: '{docus.header.height}',

    '@dark': {
      borderBottom: '1px solid {color.gray.900}',
    },

    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '2rem'
    },

    section: {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      '&.left': {
        gridColumn: 'span 2 / span 2'
      },
      '&.center': {
        gridColumn: 'span 8 / span 8',
        justifyContent: 'center',
        flex: '1'
      },
      '&.right': {
        display: 'flex',
        gridColumn: 'span 2 / span 2',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        gap: '{space.4}',
      }
    }
  }
})
</style>
