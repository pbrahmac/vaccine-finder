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
    <div>
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <DataFetch />
        </div>
        <div className="col-span-3">
          <VaccineMap />
        </div>
      </div>
    </div>
  );
}

export default App;
