// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCpjRYWozorjzoMzNM8VuAJuufjS_lI9_Q",
  authDomain: "fir-auth-fa1fc.firebaseapp.com",
  projectId: "fir-auth-fa1fc",
  storageBucket: "fir-auth-fa1fc.appspot.com",
  messagingSenderId: "64569928242",
  appId: "1:64569928242:web:f9b4d01f947a2c90e8aa2b"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export const signInWithGoogle = ()=>{
signInWithPopup(auth,provider).then((result)=>{
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('profilePic',profilePic);
}).catch((error)=>{
    console.log(error);
})
};