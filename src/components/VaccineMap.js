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
        <LoadScript googleMapsApiKey='AIzaSyAgSdjt0f1I1Oh0i9Zj3ESHMf8RHgRd0es'>
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
