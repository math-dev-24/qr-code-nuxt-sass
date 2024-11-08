<template>
  <Teleport to="body">
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="max-w-md w-full p-6 space-y-4 text-center">
        <h2 class="text-3xl font-bold">Oups, une erreur est survenue</h2>
        <p v-if="error" class="text-xl uppercase font-bold">Erreur : {{ error.statusCode  }}</p>
        <p class="text-lg">La page que vous recherchez n'existe pas.</p>
        <NuxtLink to="/" class="text-orange-500 hover:underline">Retour à la page d'accueil</NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>