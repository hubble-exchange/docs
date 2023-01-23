<script setup lang="ts">
import { useMagicKeys, whenever } from '@vueuse/core'
import { logicAnd, logicOr } from '@vueuse/math'

const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}

const keys = useMagicKeys()
const activeElement = useActiveElement()
const notUsingInput = computed(
  () => activeElement.value?.tagName !== 'INPUT' && activeElement.value?.tagName !== 'TEXTAREA',
) // to prevent changing mood when typing in Input or Textarea

const ml = keys.m
const shiftCmdl = keys['shift+cmd+l']
const shiftCtrll = keys['shift+ctrl+l']
whenever(logicAnd(logicOr(ml, shiftCmdl, shiftCtrll), notUsingInput), v => onClick())
</script>

<template>
  <button class="inline-block icon-color" aria-label="Color Mode" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.preference === 'dark'" name="uil:moon" />
      <Icon v-else-if="colorMode.preference === 'light'" name="uil:sun" />
      <Icon v-else name="uil:desktop" />
    </ColorScheme>
  </button>
</template>
