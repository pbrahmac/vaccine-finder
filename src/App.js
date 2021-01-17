import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/auth';

import Navbar from "./components/Navbar";
import MapMaster from "./components/MapMaster";
import HeaderBox from "./components/HeaderBox";

const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  
  return (
    <div className="bg-gray-700" >
      <Navbar />
      <HeaderBox />


      <MapMaster />
    </div>
  );
}

export default App;
