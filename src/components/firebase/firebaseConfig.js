import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdSKm79TTGe-2jiWEgHu4kjrImji-2sBk",
    authDomain: "groupshopping-320dd.firebaseapp.com",
    projectId: "groupshopping-320dd",
    storageBucket: "groupshopping-320dd.appspot.com",
    messagingSenderId: "51204653272",
    appId: "1:51204653272:web:83efe548717c29ddc357ad"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firestoreDB = getFirestore(app)