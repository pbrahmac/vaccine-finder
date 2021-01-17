import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from "../utils/firebase";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const VaccineMap = ({ size }) => {
    const firebase = useContext(FirebaseContext)

    const davisLoc = { lat: 38.538, lng: -121.762 }

    const [currentPos, setCurrentPos] = useState({})

    const success = (position) => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPos(currentPosition)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    })

    return (
        <LoadScript googleMapsApiKey=`${process.env.REACT_APP_MAPS_API_KEY}`>
            <GoogleMap
                // mapContainerStyle={size}
                mapContainerClassName="h-screen w-screen"
                zoom={15}
                center={davisLoc}
            />
        </LoadScript>
    )
}

export default VaccineMap;
