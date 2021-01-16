import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth';

const SignOut = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut