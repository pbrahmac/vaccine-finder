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
        <button className="text-white bg-gray-700 rounded p-3 hover:bg-gray-600" onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn
