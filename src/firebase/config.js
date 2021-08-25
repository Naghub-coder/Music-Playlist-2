import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC_O_hOYC9WH2XtEPZ_hc1H5mEjsPlTclY",
  authDomain: "music-playlist-db712.firebaseapp.com",
  projectId: "music-playlist-db712",
  storageBucket: "music-playlist-db712.appspot.com",
  messagingSenderId: "721918456994",
  appId: "1:721918456994:web:42a4b270a0e9a0c32853fb"
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