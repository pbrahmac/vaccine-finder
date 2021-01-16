import React, { createContext } from 'react'
import app from 'firebase/app'

const FirebaseContext = createContext(null)
export { FirebaseContext }

const config = {
    apiKey: "AIzaSyBnpPAfIQyThB5yrlDiIu1AyTHUpOQjoJ8",
    authDomain: "vaccine-finder-d67c2.firebaseapp.com",
    projectId: "vaccine-finder-d67c2",
    storageBucket: "vaccine-finder-d67c2.appspot.com",
    messagingSenderId: "477340824256",
    appId: "1:477340824256:web:d3f554e159ff19f6363325",
    measurementId: "G-DSKRPHKR8N"
}

export default ({ children }) => {
    if (!app.apps.length) {
        app.initializeApp(config)
    }

    return (
        <FirebaseContext.Provider value={app}>
            { children }
        </FirebaseContext.Provider>
    )
}