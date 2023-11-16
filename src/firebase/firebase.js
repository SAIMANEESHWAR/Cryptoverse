// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {firebase} from 'firebase/app';
import {addDoc,updateDoc,collection,getDocs,deleteDoc,doc} from 'firebase/firestore';

import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXntonDbveptGEjDeYcwfZpN6KOS02k-w",
  authDomain: "myfirstdata-29f2b.firebaseapp.com",
  projectId: "myfirstdata-29f2b",
  storageBucket: "myfirstdata-29f2b.appspot.com",
  messagingSenderId: "858071094005",
  appId: "1:858071094005:web:d66561c29c1ba7baea6bbc",
  measurementId: "G-G2RW664ZJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const googleprovider=new GoogleAuthProvider();

 const database=getFirestore(app);
 const mydatabase = collection(database,"mydatabase");
 const db=getFirestore(app);

 export {auth,googleprovider,database,mydatabase,db};

