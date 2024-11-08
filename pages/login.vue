<script setup lang="ts">
import type {FormSubmitEvent, FormError} from "#ui/types";
import {z} from "zod";
import {useAuthStore} from "#shared/stores/auth";

const state = reactive({
  email: '',
  password: ''
})

const error_msg = ref<string>('')
const authStore = useAuthStore();
const toast = useToast();

const schema = z.object({
  email: z.string().email(),
  password: z.string()
})

type Schema = z.output<typeof schema>

const validate = (state: any): FormError[] => {
  const errors: FormError[] = [];
  if (!state.email) errors.push({path: 'email', message: 'Email est requis'});
  if (!state.password) errors.push({path: 'password', message: 'Mot de passe requis'});
  if (state.password.length < 8) errors.push({path: 'password', message: 'Mot de passe trop court'});
  return errors;
}

async function onSubmit (event: FormSubmitEvent<Schema>) {
  error_msg.value = '';
  const client = useSupabaseClient();
  const {email, password} = event.data;
  try {
    const { error } = await client.auth.signInWithPassword({email, password});
    if (error) throw error
    await authStore.getDataUser();
    toast.add({
      title: 'Connexion réussie',
      description: 'Vous êtes maintenant connecté',
      icon: 'i-material-symbols-check-circle-rounded',
    })
    await useRouter().push('/dashboard');
  }catch (error) {
    error_msg.value = "Une erreur est survenue lors de la connexion"
  }
}

</script>

<template>
  <UForm
      :state="state"
      :schema="schema"
      @submit="onSubmit"
      :validate="validate"
      class="space-y-4 w-2/3 md:w-3/5 lg:w-2/5 m-auto block mt-8 border rounded px-4 py-2"
  >
    <h1 class="text-2xl text-center mt-6 uppercase font-bold">Se connecter</h1>
    <UFormGroup label="Email :" name="email" required>
      <UInput v-model="state.email" type="email"/>
    </UFormGroup>
    <UFormGroup label="Mot de passe :" name="password" required>
      <UInput v-model="state.password" type="password"/>
    </UFormGroup>
    <UFormGroup class="flex flex-col">
      <UButton type="submit">Se connecter</UButton>
      <span class="block text-xs my-2">
          Vous n'avez pas de compte ?
          <NuxtLink to="/register" class="text-red-600 hover:underline">Inscrivez-vous</NuxtLink>
        </span>
    </UFormGroup>
    <p v-if="error_msg" class="text-red-500 text-center">
      {{error_msg}}
    </p>
  </UForm>
</template>