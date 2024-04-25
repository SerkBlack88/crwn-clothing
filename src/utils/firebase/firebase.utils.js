import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore, 
    doc, 
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzYkTQ_3Nz7h7vxcQCQQ5o2IzHChV88TM",
    authDomain: "crwn-clothing-db-a1254.firebaseapp.com",
    projectId: "crwn-clothing-db-a1254",
    storageBucket: "crwn-clothing-db-a1254.appspot.com",
    messagingSenderId: "772625188248",
    appId: "1:772625188248:web:ea4445927f2238428257ed"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); // Initialize the Firebase app with the configuration object

  const provider = new GoogleAuthProvider(); // Create a new instance of the GoogleAuthProvider class from the firebase.auth library

  provider.setCustomParameters({ prompt: 'select_account' }); // Always trigger the Google pop-up whenever we use the GoogleAuthProvider for authentication and sign in

  export const auth = getAuth(); // Get the auth service from the firebase.auth library
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // Create a function that triggers the Google pop-up whenever we call this function

  export const db = getFirestore(); // Get the Firestore database service from the firebase.firestore library

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // Create a reference to the user document in the Firestore database
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); // Get the user document from the Firestore database
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.error('Error creating user document', error.message);
        }
    }

    return userDocRef;
}