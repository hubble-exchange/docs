<script setup>
const blogs = (await queryContent('blogs').where({ _partial: false, _dir: 'blogs', published: true }).sort({ created: -1 }).limit(3).find())
</script>

<template>
  <blog-card-grid :more-html="true">
    <template #root>
      <Ellipsis />
    </template>
    <template #title>
      Recent Articles
    </template>
    <template #more>
      <NuxtLink to="/blogs" class="underline underline-dotted underline-1 underline-offset-4 font-medium">
        View All
      </NuxtLink>
    </template>
    <recent-card v-for="blog in blogs" :key="blog._id" :to="blog._path">
      <template #title>
        {{ blog.title }}
      </template>
      <template #description>
        <pre>{{ blog.description }}...</pre>
      </template>
    </recent-card>
  </blog-card-grid>
</template>
