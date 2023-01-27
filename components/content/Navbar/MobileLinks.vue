<script setup lang="ts">
const props = defineProps({ show: { type: Boolean, default: true } })
const emit = defineEmits(['close'])
</script>

<template>
  <teleport to="body">
    <nav :show="props.show" class="dialog fixed inset-0 z-50 flex items-start overflow-y-auto" @click="emit('close')">
      <div class="max-w-[200px] ml-auto w-full min-h-full shadow-md p-4 bg-white sm:px-6" @click="emit('close')">
        <div class="h-full border-b border-b-transparent gap-2">
          <button class="relative z-10 rd-xl block ml-auto text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" aria-label="Menu" @click="emit('close')">
            <Icon class="flex items-center gap-4" name="heroicons-outline:x" aria-hidden="”true”" />
          </button>
          <UsefulLinks class="flex flex-col items-start gap-1" />
        </div>
      </div>
    </nav>
  </teleport>
</template>

<style scoped>
.dark header{
  border: none !important;
}
.dialog {
  background:rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(200%) blur(20px);
  -webkit-backdrop-filter:saturate(200%) blur(20px);
}

.dark .dialog {
  background: rgba(0, 0, 0, 0.5);
}

.dark .dialog > div{
background: #0c0c0d;
}
</style>
