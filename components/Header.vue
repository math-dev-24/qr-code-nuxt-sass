<script setup lang="ts">
import {useAuthStore} from "#shared/stores/auth";

const authStore = useAuthStore();

</script>

<template>
  <header class="flex container mx-auto my-2 md:my-4 items-center">
    <h1 class="flex-1">
      <NuxtLink to="/" class="text-2xl font-bold">
        QR Code générator
      </NuxtLink>
    </h1>
    <nav>
      <ul class="flex space-x-4 mx-6">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <template v-if="!authStore.user">
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">Register</NuxtLink>
        </li>
        </template>
        <template v-else>
          <li>
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/logout">Logout</NuxtLink>
          </li>
        </template>
      </ul>
    </nav>
    <ModeColor />
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-orange-500 dark:text-orange-300;
}
</style>