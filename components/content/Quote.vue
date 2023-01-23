<script setup lang="ts"></script>

<template>
  <blockquote class="quote-shadow block relative w-full pt-2 pr-2 pb-3 pl-6 font-oblique">
    <ContentSlot class="!m-0" :use="$slots.default" unwrap="p">
      Quote
    </ContentSlot>
  </blockquote>
</template>

<style scoped>
.quote-shadow {
  box-shadow: inset 2px 0 0 0 rgb(41 41 41);
}
.dark .quote-shadow {
  box-shadow: inset 2px 0 0 0 rgb(255 255 255);
}
</style>
