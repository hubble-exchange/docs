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
    <Ellipsis top="0" right="0" width="75%" blur="150px" />
    <div class="relative HeaderContainer" />
    <Container padded class="docs-page-content relative flex flex-col-reverse lg:(grid gap-8 grid-cols-12)">
      <aside
        ref="asideNav"
        class="aside-nav hidden overflow-y-auto lg:(block sticky col-span-2 self-start p-8)"
      >
        <NuxtLink to="/blogs" class="flex items-center text-sm leading-5 cursor-pointer text-gray-500 hover:text-gray-700">
          <Icon name="heroicons-outline:arrow-left" class="w-4 h-4" />
          <span class="ml-2">Go back</span>
        </NuxtLink>
      </aside>

      <article
        v-if="page.published"
        class="page-body relative flex flex-col flex-1 py-8 lg:mt-0"
        :class="{
          'lg:col-span-12': !hasAside && !hasToc,
          'lg:col-span-10': (!hasToc || !hasAside) && !(!hasAside && !hasToc),
          'lg:col-span-8': hasToc && hasAside,
          'pt-12 lg:pt-8': hasToc,
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
        class="page-body relative flex flex-col flex-1 py-8 lg:mt-0"
        :class="{
          'lg:col-span-12': !hasAside && !hasToc,
          'lg:col-span-10': (!hasToc || !hasAside) && !(!hasAside && !hasToc),
          'lg:col-span-8': hasToc && hasAside,
          'pt-12 lg:pt-8': hasToc,
        }"
      >
        <div class="flex items-center justify-center">
          <DocumentDrivenNotFound />
        </div>
      </article>

      <!-- TOC -->
      <div
        v-if="hasToc && page.published"
        class="toc sticky flex items-center -mx-4 sm:-mx-6 lg:(mx-0 col-span-2 self-start py-8)"
      >
        <div class="toc-wrapper w-full px-4 backdrop-bg backdrop-flter sm:px-6 lg:(px-0 bg-transparent)">
          <button class="flex items-center py-3 w-full h-full lg:hidden" @click="isOpen = !isOpen">
            <span class="text-xs font-semibold mr-1">Table of Contents</span>
            <Icon name="heroicons-outline:chevron-right" class="w-4 h-4 transition-100" :class="[isOpen && 'transform-rotate-90']" />
          </button>

          <div class="docs-toc-wrapper hidden mb-4 lg:(mt-0 block)" :class="[isOpen && '!block']">
            <DocsToc @move="isOpen = false" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.docs-page-content {
  height: var(--page-height)
}

.page-body:deep(h1:not(.not-prose):first-child) {
  --at-apply: mt-0 text-4xl leading-9;
}

.page-body:deep(h1:not(.not-prose)first-child + p) {
  --at-apply: mt-0 mb-8 pb-8 border-b text-gray-500 sm:(text-lg leading-4.5) dark:text-gray-400;
    /* borderBottom: '1px solid {borders.primary.default}', */
}

.page-body:deep(h1:not(.not-prose)first-child + p) a {
  --at-apply: text-gray-700 dark: text-gray-200 hover:text-gray-700;
    /* borderBottom: '1px solid {borders.primary.default}', */
}

.page-body .docs-prev-next {
  --at-apply: mt-4;
}

.toc {
  top: var(--header-height);
}

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

@screen sm {
  .page-body:deep(h1:not(.not-prose):first-child) {
    --at-apply: mt-0 text-5xl leading-12;
  }
}

@screen lg {
  .aside-nav {
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
  }

  .toc {
    max-height: var(--page-height),
  }
}
</style>
