import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC163pwO-5S8p9hpCjEpla2Y_BhRHODmMY",
    authDomain: "reactproyectofinal-3908d.firebaseapp.com",
    projectId: "reactproyectofinal-3908d",
    storageBucket: "reactproyectofinal-3908d.appspot.com",
    messagingSenderId: "647339637111",
    appId: "1:647339637111:web:96e361e6182fc416444972",
    measurementId: "G-E0H2C3N600"
  };

  firebase.intializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, db, storage}