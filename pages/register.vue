<script setup lang="ts">
import {z} from "zod";
import type {FormSubmitEvent, FormError} from "#ui/types";


const state = reactive({
  email: '',
  password: ''
})

const error_msg = ref<string>('')

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
  error_msg.value = ''
  const client = useSupabaseClient()
  const {email, password} = event.data
  try {
    const { error } = await client.auth.signUp({email, password})
    if (error) throw error
    await useRouter().push('/login')
  }catch (error) {
    error_msg.value = "Une erreur est survenue lors de l'inscription"
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
    <h1 class="text-2xl text-center mt-6 uppercase font-bold">S'inscrire</h1>
    <UFormGroup label="Email :" name="email" required>
      <UInput v-model="state.email" type="email"/>
    </UFormGroup>
    <UFormGroup label="Mot de passe :" name="password" required>
      <UInput v-model="state.password" type="password"/>
    </UFormGroup>
    <UFormGroup>
      <UButton type="submit">Se connecter</UButton>
      <p class="text-xs my-2">
        Déjà inscrit ?
        <NuxtLink to="/login" class="text-orange-500 hover:underline">
          Se connecter
        </NuxtLink>
      </p>
    </UFormGroup>
    <p v-if="error_msg" class="text-red-500 text-center">
      {{error_msg}}
    </p>
  </UForm>
</template>