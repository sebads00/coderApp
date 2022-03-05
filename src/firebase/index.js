import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCmwgC6hkAllppHogBewxSOqWLCvJsMg8A",
    authDomain: "coderapp-c717f.firebaseapp.com",
    projectId: "coderapp-c717f",
    storageBucket: "coderapp-c717f.appspot.com",
    messagingSenderId: "878451847009",
    appId: "1:878451847009:web:12947913fd670d7c885f20"
  };

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)
