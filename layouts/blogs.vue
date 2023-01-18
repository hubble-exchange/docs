<script setup>
import { coverStory, weeklySpotlight } from '~~/blogs.config'
const blogs = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true }).sort({ created: -1 }).find())

const cover = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true, _path: coverStory }).findOne())

const weekly = []
for (let i = 0; i < weeklySpotlight.length; i++)
  weekly.push(await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true, _path: weeklySpotlight[i] }).findOne())
</script>

<template>
  <div class="relative min-h-[89vh]">
    <Ellipsis right="0px" width="75%" blur="150px" />
    <section class="BlogContainer relative">
      <PageHeader image="content/blog-header-bg.png">
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

        <CoverStory :image="cover.coverImage" :href="cover._path">
          <template #storyDate>
            <FormatDate :date="new Date(cover.created * 1000)" />
          </template>
          <template #coverTitle>
            {{ cover.title }}
          </template>
          <template #description>
            {{ cover.description }}
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
          <blog-card v-for="blog in weekly" :key="blog._id" :to="blog._path" :image="blog.image" :avatar="blog.avatars[0]">
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
