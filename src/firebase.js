import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from 'react-toastify'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcQH2vzRFtYsHR-gsOCWojTAO3BqHjpa8",
    authDomain: "first-complete-auth.firebaseapp.com",
    projectId: "first-complete-auth",
    storageBucket: "first-complete-auth.firebasestorage.app",
    messagingSenderId: "883859273292",
    appId: "1:883859273292:web:5f5832ae560903038ea6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (err) {
        console.log(err);
        alert(err.message);
        toast.error(err.message)
    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log(err);
        alert(err.message);
        toast.error(err)
        toast.error(err.message)

    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }