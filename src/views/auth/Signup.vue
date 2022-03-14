<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="password" placeholder="Password" v-model="password">    
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        console.log('User signed up')
        router.push({ name: 'Home' })
      }
    }

    return { email, password, displayName, isPending, error, handleSubmit }
  }
}
</script>

<style>

</style>