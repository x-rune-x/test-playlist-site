<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/anzus1.png" alt="rune">
      <h1><router-link :to="{ name: 'Home' }"></router-link>Music Mixer</h1>
      <div class="links">
        <div v-if="!user">
          <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>       
        <div v-else>
          <button @click="handleLogout">Logout</button>
        </div>        
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const { logout, error, isPending } = useLogout()
    const { user } = getUser()

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        console.log('User is logged out')
        router.push({
          name: 'Login'
        })
      }
      else {
        console.log(error)
      }
    }

    return { handleLogout, isPending, user }
  }
}
</script>

<style scoped>
  navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>