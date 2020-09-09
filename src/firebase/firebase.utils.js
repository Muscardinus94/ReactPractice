import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCWcChamNHDcUXZUR0RCn0wg1rB1G0BLHI",
  authDomain: "ecommercepractice-e9439.firebaseapp.com",
  databaseURL: "https://ecommercepractice-e9439.firebaseio.com",
  projectId: "ecommercepractice-e9439",
  storageBucket: "ecommercepractice-e9439.appspot.com",
  messagingSenderId: "306922953153",
  appId: "1:306922953153:web:abfb4d005b3b0de8347740",
  measurementId: "G-03T74JCX32"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
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
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;