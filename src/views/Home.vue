<template>
  <div class="home">
    <p>Home page</p>
    <div v-if="error">
      Could not fetch the data
      {{ error.value }}
    </div>
    <div v-else>
      <ListView :playlists="documents" />
      <!-- <p v-for="doc in documents" :key="doc.id">{{ doc.title }}</p> -->
    </div>

  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import ListView from '../components/ListView.vue'

export default { 
  name: 'Home',
  components: { ListView },
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
