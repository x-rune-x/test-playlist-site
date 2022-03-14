<template>
  <div class="home">
    <p>Home page</p>
    <div v-if="error">
      Could not fetch the data
      {{ error.value }}
    </div>
    <div v-else>
      <p v-for="doc in documents" :key="doc.id">{{ doc.title }}</p>
    </div>

  </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default { 
  name: 'Home',
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
