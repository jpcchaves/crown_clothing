import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNd6K8jnZ6UirK84I4hS9eBPqyfh-itYE",
  authDomain: "crown-clothing-db-107c0.firebaseapp.com",
  projectId: "crown-clothing-db-107c0",
  storageBucket: "crown-clothing-db-107c0.appspot.com",
  messagingSenderId: "810018047739",
  appId: "1:810018047739:web:694b0b7698c2612c05525e",
};

const firebaseApp = initializeApp(firebaseConfig);

// auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
