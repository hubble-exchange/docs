<script setup lang="ts">
defineProps({ date: { type: Date, required: true } })
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
</script>

<template>
  <time :title="date.toDateString()">
    {{ months[date.getMonth()] }} {{ date.getDate() }}, {{ date.getFullYear() }}
  </time>
</template>
