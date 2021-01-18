import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/auth';

import Navbar from "./components/Navbar";
import MapMaster from "./components/MapMaster";
import HeaderBox from "./components/HeaderBox";
import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  
  return (
    <div className="bg-gray-700" >
      <Navbar />
      <HeaderBox />
      <MapMaster />
      <Resources/>
      <AboutUs/>
      <FAQ/>

    </div>
  );
}

export default App;
