import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC5h1q_BjhahovaF07evLjP5HG0GjF1Xl8",
  authDomain: "playlist-test-site.firebaseapp.com",
  projectId: "playlist-test-site",
  storageBucket: "playlist-test-site.appspot.com",
  messagingSenderId: "844500256250",
  appId: "1:844500256250:web:3d8963e036416011d9d043"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }