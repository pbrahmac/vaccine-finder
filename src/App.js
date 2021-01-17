import React, { useContext, useEffect, useRef, useState } from "react";

import { FirebaseContext } from "./utils/firebase";
import 'firebase/auth';

import VaccineMap from "./components/VaccineMap";
import Navbar from "./components/Navbar";
import DataFetch from "./components/DataFetch";

const App = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  
  return (
    <div className="App">
      <Navbar />
      <VaccineMap />
      <DataFetch />
    </div>
  );
}

export default App;
