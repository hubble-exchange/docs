<script setup>
const blogs = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true }).sort({ created: -1 }).find())
</script>

<template>
  <div class="relative min-h-[89vh]">
    <Ellipsis right="0px" width="75%" blur="150px" />
    <section class="BlogContainer relative">
      <div class="pt-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-20 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-7xl dark:text-white">
              Blog
            </h2>
            <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl">
              The newest updates, tutorials and insights into the development of Hubble Exchange and its products!
            </p>
          </div>
          <blog-card-grid>
            <template #root>
              <Ellipsis />
            </template>
            <blog-card v-for="blog in blogs" :key="blog._id" :to="blog._path">
              <template #title>
                {{ blog.title }}
              </template>
              <template #description>
                <pre>{{ blog.description }}...</pre>
              </template>
            </blog-card>
          </blog-card-grid>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.BlogContainer {
  max-width: 77rem;
  margin: auto auto 5rem;

  --at-apply: mx-4 xl:mx-auto;
}
</style>
