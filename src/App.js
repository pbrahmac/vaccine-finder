import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";

const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  
  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <header>
        <h1>Vaccine Finder</h1>
        <SignOut/>
      </header>
      
      <section>
        {user ?
          <div>
            <h1>You're signed in!</h1>
          </div>
          :
          <div>
            <h1>You're signed out!</h1>
            <SignIn />
          </div>}
      </section>
      {}
    </div>
  );
}

export default App;
