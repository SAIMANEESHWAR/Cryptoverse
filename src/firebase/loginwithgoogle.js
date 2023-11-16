// GoogleSignInButton.js
import React from 'react';
import { auth, googleprovider,mydatabase,db } from './firebase.js';
import {signInWithPopup} from "firebase/auth";
import {addDoc,updateDoc,collection,getDocs,deleteDoc,doc,getDoc,setDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


const Loginwithgoogle = () => {
    const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth,googleprovider);
      const user = result.user;

      // Log the user details
      console.log('User details:', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      });
      storeuserdetails(user);
      sessionStorage.setItem('verifieduser', true);
      
      //store details in session storage
      const fetchData = async () => {
        var verified = sessionStorage.getItem('verifieduser');
        
        if (verified) {
            
          const userauth = auth.currentUser;
  
          if (userauth) {
            const userDocument = await getDoc(doc(collection(db, 'users'), userauth.uid));
  
            if (userDocument.exists()) {
             
              console.log(userDocument.data());
              const userDocumentData = userDocument.data();
              sessionStorage.setItem('user',userDocumentData);

            } else {
              console.log('User document does not exist.');
            }
          }
        }
        else{
            
        }
      };
  
      fetchData();

    
    } catch (error) {
      console.error(error.message);
    }
  };
  const storeuserdetails=async(user)=>{
    // Access the 'users' collection in Firestore
    const usersCollection = collection(db,"users");

    // Check if the user already exists in Firestore
    const userDocument = doc(usersCollection, user.uid);

    try {
        const docSnapshot = await getDoc(userDocument);
    
        if (!docSnapshot.exists()) {
          // If the user doesn't exist, create a new document
          await setDoc(userDocument, {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            favoriteCoins: [], // Initialize an empty array for favorite coins
          });
        }
        console.log(docSnapshot);
      } catch (error) {
        console.error("Error getting user document:", error.message);
      }
   

  }

  return (
    <button onClick={signInWithGoogle}>
      Sign In with Google
    </button>
  );
};

export default Loginwithgoogle;
