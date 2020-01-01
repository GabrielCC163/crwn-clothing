import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLCllHxPVN-bvHccBTLVzPINVzfXuzpAw",
    authDomain: "crwn-db-63c9c.firebaseapp.com",
    databaseURL: "https://crwn-db-63c9c.firebaseio.com",
    projectId: "crwn-db-63c9c",
    storageBucket: "crwn-db-63c9c.appspot.com",
    messagingSenderId: "254712461722",
    appId: "1:254712461722:web:f58c12913d22617d4b6223",
    measurementId: "G-SFJMR738ZS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;