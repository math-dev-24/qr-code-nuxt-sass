<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

</script>

<template>
  <UButton
      @click="toggleColorMode"
      :icon="colorMode.value === 'dark' ? 'i-material-symbols-dark-mode' : 'i-material-symbols-light-sunny'"
      size="sm"
      color="orange"
      variant="ghost"
      class="m-auto block"
  />
</template>