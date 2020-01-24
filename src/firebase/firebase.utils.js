import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAx4MgiAvEfJWUL0nEXlohYybtvc_NFc24",
    authDomain: "deb-db.firebaseapp.com",
    databaseURL: "https://deb-db.firebaseio.com",
    projectId: "deb-db",
    storageBucket: "deb-db.appspot.com",
    messagingSenderId: "585723258166",
    appId: "1:585723258166:web:74530cb3b8f7fd90a3ff97",
    measurementId: "G-E3355FPRSE"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;