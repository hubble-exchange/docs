<script setup lang="ts">
const { page } = useContent()
const pageId = computed(() => page.value._path.split('/').pop())

const fallbackValue = (value: string, fallback = true) => {
  if (typeof page.value?.[value] !== 'undefined')
    return page.value[value]

  return fallback
}
const hasBody = computed(() => !page.value || page.value?.body?.children?.length > 0)
const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

// TODO: get navigation links from aside level
// const hasAside = computed(() => page.value?.aside !== false && navigation.value?.length > 0)
const hasAside = ref(true)
const bottom = computed(() => fallbackValue('bottom', true))
const isOpen = ref(false)
</script>

<template>
  <div class="relative min-h-[91vh]">
    <Ellipsis top="0" right="0px" width="75%" blur="150px" />
    <div class="relative HeaderContainer" />
    <Container padded class="docs-page-content">
      <aside
        ref="asideNav"
        class="aside-nav"
      >
        <NuxtLink to="/blogs" class="go-back-link">
          <Icon name="heroicons-outline:arrow-left" class="icon" />
          <span class="text">Go back</span>
        </NuxtLink>
      </aside>

      <article
        v-if="page.published"
        class="page-body"
        :class="{
          'one-column': !hasAside && !hasToc,
          'two-column': (!hasToc || !hasAside) && !(!hasAside && !hasToc),
          'three-column': hasToc && hasAside,
          'with-toc': hasToc,
        }"
      >
        <header class="mb-4 lg:mb-6">
          <ProseH1 :id="pageId" class="text-center lg:text-left !mb-6">
            {{ page.title }}
          </ProseH1>
          <BlogDate />
          <BlogAuthors />
        </header>
        <slot v-if="hasBody" />
        <template v-if="hasBody && page && bottom">
          <!-- <DocsPageBottom /> -->
          <DocsPrevNext />
        </template>
      </article>

      <article
        v-else
        class="page-body"
        :class="{
          'one-column': !hasAside && !hasToc,
          'two-column': (!hasToc || !hasAside) && !(!hasAside && !hasToc),
          'three-column': hasToc && hasAside,
          'with-toc': hasToc,
        }"
      >
        <div class="flex items-center justify-center">
          <DocumentDrivenNotFound />
        </div>
      </article>

      <!-- TOC -->
      <div
        v-if="hasToc && page.published"
        class="toc"
      >
        <div class="toc-wrapper">
          <button @click="isOpen = !isOpen">
            <span class="title">Table of Contents</span>
            <Icon name="heroicons-outline:chevron-right" class="icon" :class="[isOpen && 'rotate']" />
          </button>

          <div class="docs-toc-wrapper" :class="[isOpen && 'opened']">
            <DocsToc @move="isOpen = false" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="ts">
css({
  '.go-back-link': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    cursor: 'pointer',
    color: '{color.gray.500}',
    '&:hover': {
      color: '{color.gray.700}',
    },
    '.icon': {
      width: '{space.4}',
      height: '{space.4}'
    },
    '.text': {
      marginLeft: '{space.2}'
    }
  },
  '.docs-page-content': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column-reverse',
    minHeight: '{docus.page.height}',
    '@lg': {
      display: 'grid',
      gap: '{space.8}',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'
    }
  },
  '.aside-nav': {
    display: 'none',
    overflowY: 'auto',
    '@lg': {
      display: 'block',
      position: 'sticky',
      top: '{docus.header.height}',
      gridColumn: 'span 2/span 2',
      alignSelf: 'flex-start',
      height: 'calc(100vh - {docus.header.height})',
      py: '{space.8}',
    }
  },
  '.page-body': {
    position: 'relative',
    display: 'flex',
    flexDirection: "column",
    flex: '1 1 0%',
    py: '{space.8}',
    '&.one-column': {
      '@lg': {
        gridColumn: 'span 12 / span 12'
      }
    },
    '&.two-column': {
      '@lg': {
        gridColumn: 'span 10 / span 10'
      }
    },
    '&.three-column': {
      '@lg': {
        gridColumn: 'span 8 / span 8'
      }
    },
    '&.with-toc': {
      paddingTop: '{space.12}',
      '@lg': {
        paddingTop: '{space.8}',
      }
    },
    '@lg': {
      marginTop: 0
    },
    // `.not-prose` can be useful if creating <h1> with a component (404 page is an example)
    ':deep(h1:not(.not-prose):first-child)': {
      marginTop: 0,
      fontSize: '{text.4xl.fontSize}',
      lineHeight: '{text.4xl.lineHeight}',
      '@sm': {
        fontSize: '{text.5xl.fontSize}',
        lineHeight: '{text.5xl.lineHeight}',
      }
    },
    // `.not-prose` can be useful if creating <h1> with a component (404 page is an example)
    ':deep(h1:not(.not-prose)first-child + p)': {
      marginTop: 0,
      marginBottom: '{space.8}',
      paddingBottom: '{space.8}',
      borderBottom: '1px solid {borders.primary.default}',
      color: '{color.gray.500}',
      '@sm': {
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
      },
      '@dark': {
        color: '{color.gray.400}',
      },
      a: {
        color: '{color.gray.700}',
        '@dark': {
          color: '{color.gray.200}',
        },
        "&:hover": {
          borderColor: '{color.gray.700}'
        }
      }
    },
    '.docs-prev-next': {
      marginTop: '{space.4}'
    }
  },
  '.toc': {
    position: 'sticky',
    top: '{docus.header.height}',
    display: 'flex',
    alignItems: 'center',
    mx: 'calc(0px - {space.4})',
    '@sm': {
      mx: 'calc(0px - {space.6})',
    },
    '@lg': {
      maxHeight: '{docus.page.height}',
      gridColumn: 'span 2 / span 2',
      mx: 0,
      alignSelf: 'flex-start',
      py: '{space.8}',
    },
    '.toc-wrapper': {
      width: '100%',
      backdropFilter: '{backdrop.filter}',
      backgroundColor: '{backdrop.background}',
      px: '{space.4}',
      '@sm': {
        px: '{space.6}',
      },
      '@lg': {
        px: 0,
        backgroundColor: 'transparent',
        backdropFilter: 'none'
      },
      button: {
        display: 'flex',
        alignItems: 'center',
        py: '{space.3}',
        width: '100%',
        height: '100%',
        '@lg': {
          display: 'none'
        },
        '.title': {
          fontSize: '{text.xs.fontSize}',
          lineHeight: '{text.xs.lineHeight}',
          fontWeight: '{fontWeight.semibold}',
          marginRight: '{space.1}',
        },
        '.icon': {
          width: '{space.4}',
          height: '{space.4}',
          transition: 'transform 100ms',
          '&.rotate': {
            transform: 'rotate(90deg)'
          }
        }
      },
      '.docs-toc-wrapper': {
        display: 'none',
        marginBottom: '{space.4}',
        '&.opened': {
          display: 'block'
        },
        '@lg': {
          marginTop: 0,
          display: 'block'
        }
      }
    }
  }
})
</style>

<style scoped>
.HeaderContainer {
  max-width: 87rem;
  margin: auto auto;

  --at-apply: px-12 xl:px-0;
}

.PostContainer {
  max-width: 58rem;
  margin: auto auto 5rem;

  --at-apply: px-12 xl:px-0;
}
</style>
