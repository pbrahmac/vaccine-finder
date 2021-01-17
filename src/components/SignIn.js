import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth';

const SignIn = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
    return (
        <button className="transition duration-300 ease-in-out text-white uppercase font-semibold bg-gray-800 border-2 border-white rounded px-6 py-2 hover:bg-gray-50 hover:text-black" onClick={signInWithGoogle}>Sign In</button>
    )
}

export default SignIn
