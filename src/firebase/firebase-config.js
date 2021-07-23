import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrW1NAZro6mg__unSxPVdBR5lbobJVzlg",
    authDomain: "react-app-cursos-58103.firebaseapp.com",
    projectId: "react-app-cursos-58103",
    storageBucket: "react-app-cursos-58103.appspot.com",
    messagingSenderId: "938887929911",
    appId: "1:938887929911:web:992c87156c44df54dedfb2"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}