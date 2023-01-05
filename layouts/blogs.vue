<script setup>
const blogs = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true }).sort({ created: -1 }).find())

const cover = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true, featured: ['coverstory'] }).find())
console.log('cover', cover)
</script>

<template>
  <div class="relative min-h-[89vh]">
    <Ellipsis right="0px" width="75%" blur="150px" />
    <section class="BlogContainer relative">
      <PageHeader :image="['content/blog-header-bg.png']">
        <template #coverTitle>
          Hubble Exchange Blog
        </template>
        <template #description>
          Learning Resource & materials, Stories, News & Official updates
        </template>
      </PageHeader>

      <Wrapper>
        <h2 class="text-10 mt-10 font-semibold">
          Cover Story
        </h2>
        <CoverStory :image="['content/cover-story.png']" :href="cover[0]._path">
          <template #storyDate>
            <FormatDate :date="new Date(cover[0].created * 1000)" />
          </template>
          <template #coverTitle>
            {{ cover[0].title }}
          </template>
          <template #description>
            {{ cover[0].description }}
          </template>
        </CoverStory>
        <hr class="border-t my-8 border-gray-800">
        <h2 class="text-10 mt-10 font-semibold">
          Weekly Spotlight
        </h2>
        <blog-card-grid style="padding-bottom: 20px !important;">
          <template #root>
            <Ellipsis />
          </template>
          <blog-card v-for="blog in blogs" :key="blog._id" :to="blog._path" :image="blog.image" :avatar="blog.avatars[0]">
            <template #category>
              {{ blog.category[0] || 'Story Category' }}
            </template>
            <template #title>
              {{ blog.title }}
            </template>
            <template #description>
              <pre>{{ blog.description }}...</pre>
            </template>
            <template #postBy>
              {{ blog.authors[0] || 'Candy Carpet' }}
            </template>
            <template #postDate>
              <FormatDate :date="new Date(blog.created * 1000)" />
            </template>
          </blog-card>
        </blog-card-grid>
        <hr class="border-t my-8 border-gray-800">
        <h2 class="text-10 mt-10 font-semibold">
          Recent Reads
        </h2>
        <blog-card-grid style="padding-bottom: 20px !important;">
          <template #root>
            <Ellipsis />
          </template>
          <blog-card v-for="blog in blogs" :key="blog._id" :to="blog._path" :image="blog.image" :avatar="blog.avatars[0]">
            <template #category>
              {{ blog.category[0] || 'Story Category' }}
            </template>
            <template #title>
              {{ blog.title }}
            </template>
            <template #description>
              <pre>{{ blog.description }}...</pre>
            </template>
            <template #postBy>
              {{ blog.authors[0] || 'Candy Carpet' }}
            </template>
            <template #postDate>
              <FormatDate :date="new Date(blog.created * 1000)" />
            </template>
          </blog-card>
        </blog-card-grid>
      </Wrapper>
      <!-- <div class="pt-12">
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
      </div> -->
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
