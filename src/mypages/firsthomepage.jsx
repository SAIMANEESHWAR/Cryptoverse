import React from 'react'
import laptopimg from "../photos/home3.jpeg";
import Navbar from '../components/navbar.jsx';
import Templets from '../components/templates.jsx';
import profile from '../photos/photos/profile1.png';
import { auth, googleprovider,mydatabase,db } from '../firebase/firebase.js';
import {signInWithPopup} from "firebase/auth";
import {addDoc,updateDoc,collection,getDocs,deleteDoc,doc,getDoc,setDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";



export default function Myhome() {

//style
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${laptopimg})`,    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
  };
//login from google
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
    sessionStorage.setItem('displayName',  user.displayName);
    sessionStorage.setItem('email',  user.email);
    sessionStorage.setItem('photoURL', user.photoURL);
    navigate('/Home');
    
    //store details in session storage
    // const fetchData = async () => {
    //   var verified = sessionStorage.getItem('verifieduser');
      
    //   if (verified) {
          
    //     const userauth = auth.currentUser;

    //     if (userauth) {
    //       const userDocument = await getDoc(doc(collection(db, 'users'), userauth.uid));

    //       if (userDocument.exists()) {
           
    //         console.log(userDocument.data());
    //         const userDocumentData = userDocument.data();
    //         sessionStorage.setItem('user',userDocumentData);

    //       } else {
    //         console.log('User document does not exist.');
    //       }
    //     }
    //   }
    //   else{
          
    //   }
    // };

    // fetchData();

  
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
      console.log("Error getting user document:", error.message);
    }
 

}


  return (
    <div className='bg-dark-subtle'>
      {/* ${themecolor ? "bg-dark-subtle" : "bg-body-tertiary"} */}
                      <section className={`navbar navbar-expand-lg bg-transparent fixed-top`} >
                <div className="container-fluid" style={{ width: "100%" }}>

                    <div className='d-flex flex-row mb-1'>
                        <h2 className="mt-3" ><i class="fa-brands fa-bitcoin text-warning"></i>-<span><i class="fa-brands fa-ethereum text-info"></i></span><span className='text-secondary'>E</span>R<span><i class="fa-solid fa-dollar-sign text-success"></i></span><span className='text-secondary'>E</span></h2>
                    </div>

                    <div className='d-flex flex-row justify-content-end'>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i class="fa-solid  fa-bars text-light"></i>
                        </button>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-1 mb-lg-0 navfont">

                            <li className="nav-item">
                                {/* <button className='border-0 bg-transparent' onClick={() => setthemecolor(!themecolor)}><div id='navbarcolorid'>
                                    {themecolor ? (
                                        <h2 className='mt-2 me-3'><i className="fa-solid fa-moon"></i></h2>
                                    ) : (
                                        <h2 className='mt-2 me-3'><i className="fa-regular fa-moon"></i></h2>
                                    )}
                                </div></button> */}
                            </li>
                            <li className="nav-item">
                                <div className="d-flex me-3" role="search">
                                    <button className="nav-link active rounded-circle " aria-current="page" onClick={signInWithGoogle}>
                                        <h3><i class="fa-solid fa-user text-light"></i></h3>
                                    </button>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        <section style={styles}>
          <br></br>
          <br></br>
          <br></br>

            </section>
                    <Templets/>
    </div>
  )
}
