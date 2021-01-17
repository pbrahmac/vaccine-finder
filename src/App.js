import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/auth';

import Navbar from "./components/Navbar";
import MapMaster from "./components/MapMaster";

const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  
  return (
    <div>
      <Navbar />
      <MapMaster />
    </div>
  );
}

export default App;
