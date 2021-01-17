import React, { useEffect, useState } from 'react';

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const VaccineMap = () => {
    // const davisLoc = { lat: 38.538, lng: -121.762 }

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

    const mapClassNames = "w-screen md:w-3/4 float-right"

    return (
        <LoadScript googleMapsApiKey=`${process.env.REACT_APP_MAPS_API_KEY}`>
            <GoogleMap
                mapContainerStyle={{ height: "90vh"}}
                mapContainerClassName={mapClassNames}
                zoom={15}
                center={currentPos}
            />
        </LoadScript>
    )
}

export default VaccineMap;
