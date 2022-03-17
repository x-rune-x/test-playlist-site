import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection, query) => {
  const documents = ref(null)
  const error = ref(null)

  // Register the firestore collection reference
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    if (query) {
      collectionRef = collectionRef.where(...query)
    }

  const unsub = collectionRef.onSnapshot((snap) => {
    console.log('snapshot')
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id }) // Need to allow the server to create the timestamp and send it back.
    })

    // Update values
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'Could not fetch data.'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
