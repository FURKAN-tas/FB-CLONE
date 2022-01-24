import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABRA7B9LYEW3le28O5jH7cQqBoVki2E8I",
    authDomain: "facebook-clone-b8231.firebaseapp.com",
    projectId: "facebook-clone-b8231",
    storageBucket: "facebook-clone-b8231.appspot.com",
    messagingSenderId: "1044801002853",
    appId: "1:1044801002853:web:62dc278ea1946a9d69558c",
    measurementId: "G-Y8QWTHPSBB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;