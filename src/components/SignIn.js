import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth';

const SignIn = ({ isNavbar }) => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
    return (
        <div className="text-center">
            {isNavbar ? (
                <button className="transition duration-300 ease-in-out text-white uppercase font-semibold bg-gray-800 border-2 border-white rounded px-6 py-2 hover:bg-gray-50 hover:text-black" onClick={signInWithGoogle}>Sign In</button>
            ) : (
                <button className="transition duration-300 ease-in-out text-white uppercase font-semibold bg-gray-800 rounded px-6 py-2 hover:bg-gray-700 hover:shadow-lg" onClick={signInWithGoogle}>Sign In to Add</button>
            )}
        </div>
    )
}

export default SignIn
