import {initializeApp} from "firebase/app";
import{getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpMRM8WSJuYzNKr8xNHJMQqcntR5gES6I",
    authDomain: "netflix-clone-c7106.firebaseapp.com",
    projectId: "netflix-clone-c7106",
    storageBucket: "netflix-clone-c7106.appspot.com",
    messagingSenderId: "708148935928",
    appId: "1:708148935928:web:5b5ae609cf0baff11c8f0d"
  };

  const app =initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export{ app, auth, db};