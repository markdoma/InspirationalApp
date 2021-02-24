import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8BgfX-0ezohx013FqHLTSguT4mK8LSMs",
  authDomain: "crown-db-37bba.firebaseapp.com",
  projectId: "crown-db-37bba",
  storageBucket: "crown-db-37bba.appspot.com",
  messagingSenderId: "45714505360",
  appId: "1:45714505360:web:40fcf66860ef9ebc772215",
  measurementId: "G-JYYMM5T1J2",
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionaldata });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
