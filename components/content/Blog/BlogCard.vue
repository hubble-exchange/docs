<script setup lang="ts">
const props = defineProps({
  to: { type: String, default: '/blogs' },
  icon: { type: String, default: '' },
  iconClass: { type: String, default: '' },
  blurry: { type: Boolean, default: true, required: false },
  image: { type: String, default: '' },
  avatar: { type: String, default: '' },
})
</script>

<template>
  <NuxtLink :class="{ blurry }" class="card" :to="to">
    <div class="w-full pb-6">
      <img :src="props.image" :alt="props.image" class="min-h-[190px] object-cover rounded">
    </div>
    <div class="text-xs">
      <ContentSlot :use="$slots.category" unwrap="p">
        Story Category
      </ContentSlot>
    </div>
    <div class="mt-2 flex items-center">
      <h3 class="title">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <Icon class="ml-auto" :name="icon || 'uit:arrow-up-right'" />
    </div>
    <p class="description">
      <ContentSlot :use="$slots.description" unwrap="p">
        Card description
      </ContentSlot>
    </p>
    <div class="flex items-center mt-4">
      <img :src="props.avatar" :alt="props.avatar" class="h-8 w-8 rounded-full">
      <div class="text-xs pl-2.5">
        <div>
          <ContentSlot :use="$slots.postBy" unwrap="p">
            Story postBy
          </ContentSlot>
        </div>
        <div class="text-gray-400">
          <ContentSlot :use="$slots.postDate" unwrap="p">
            Story postDate
          </ContentSlot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.card': {
    display: 'block',
    position: 'relative',
    width: '100%',
    padding: '{space.5}',
    borderRadius: '{radii.xl}',
    border: '1px solid {color.gray.200}',
    background: '{backdrop.background}',
    '@dark': {
      borderColor: '{color.gray.900}',
      color: '{color.gray.50}'
    },
    '&.blurry': {
      backdropFilter: '{backdrop.filter}',
    },
    '.icon': {
      display: 'inline-block',
      marginBottom: '{space.2}',
      width: '{space.6}',
      height: '{space.6}'
    },
    '.title': {
      marginBottom: '{space.3}',
      fontSize: '{text.xl.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.semibold}'
    },
    '.description': {
      fontSize: '{text.base.fontSize}',
      fontWeight: '{fontWeight.medium}',
      color: '{text.color.secondary}'
    }
  }
})
</style>
