import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// access db
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshop = await getDoc(userDocRef);
  console.log(userSnapshop.exists());

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data doesnt exist
  // create / set the document with the data from userAuth in my collection

  // if user data exists

  // return userDocRef
  return userDocRef;
};

// createUserWithEmailAndPassword
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
