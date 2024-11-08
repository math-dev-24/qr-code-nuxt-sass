<template>
  <div>
    <p>
      Redirecting...
    </p>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "#shared/stores/auth";

const toast = useToast();
onMounted(() => {
  logout()
})

async function logout() {
  try {
    const authStore = useAuthStore();
    authStore.user = null;
    const client = useSupabaseClient();
    const router = useRouter();
    await client.auth.signOut();
    toast.add({
      title: 'Déconnexion réussie',
      description: 'Vous êtes maintenant déconnecté',
      icon: 'i-material-symbols-check-circle-rounded',
    });
    await router.push('/login');
  }catch(err) {
    console.error(err);
  }
}

</script>