<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">    
    <button v-if="!isPending">Login</button>
    <button v-if="isPending" disabled>Loading</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const { error, login, isPending } = useLogin()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
      }
      else {
        console.log(error.value)
      }
    }

    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>