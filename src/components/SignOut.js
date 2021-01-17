import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth';

const SignOut = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    
    return auth.currentUser && (
        <button className="transition duration-300 ease-in-out text-white uppercase font-semibold bg-gray-800 border-2 border-white rounded-md px-3 py-2 hover:bg-gray-50 hover:text-black" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut