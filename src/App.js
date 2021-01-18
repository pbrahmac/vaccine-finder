import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/auth';

import Navbar from "./components/Navbar";
import MapMaster from "./components/MapMaster";
import HeaderBox from "./components/HeaderBox";

import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

import alanBtn from "@alan-ai/alan-sdk-web";



const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()

  useEffect(() => {
    alanBtn({
        key: '1ddcd64e24e66f219de6ba7630935d942e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
            if (commandData.command === 'go:back') {
                    // Call the client code that will react to the received command
                }
            }
    });
}, []);

  return (
    <div className="bg-gray-100" >
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
