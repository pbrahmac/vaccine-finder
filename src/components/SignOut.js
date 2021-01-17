import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth';

const SignOut = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    
    return auth.currentUser && (
        <button className="text-white bg-gray-700 rounded p-3 hover:bg-gray-600" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut