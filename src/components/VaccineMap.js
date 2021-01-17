import React, { useEffect, useState } from 'react';

import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const VaccineMap = ({ locations }) => {    
    const davisLoc = { lat: 38.538, lng: -121.762 }
    const [currentPos, setCurrentPos] = useState({})
    const [selected, setSelected] = useState({})

    const onSelect = (item) => {
        setSelected(item)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentPos({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }, () => {
                setCurrentPos({
                    lat: davisLoc.lat,
                    lng: davisLoc.lng
                })
        })
    }, [davisLoc.lat, davisLoc.lng])

    const getColor = (selected) => {
        let res = ""
        if (selected.toLowerCase() === "available") {
            res = "text-green-500"
        } else if (selected.toLowerCase() === "coming_soon") {
            res = "text-yellow-500"
        } else {
            res = "text-red-400"
        }
        return res
    }

    return (
        <div>
            <LoadScript googleMapsApiKey='AIzaSyAgSdjt0f1I1Oh0i9Zj3ESHMf8RHgRd0es'>
                <GoogleMap
                    mapContainerStyle={{ height: "90vh"}}
                    mapContainerClassName="w-full float-right"
                    zoom={14}
                    center={currentPos}
                >
                    {locations && locations.map((loc, idx) => (
                        <Marker key={idx} position={loc.coords} title={loc.locName} onClick={() => onSelect(loc)} />
                    ))}
                    {selected.coords && (
                        <InfoWindow position={selected.coords} clickable={true} onCloseClick={() => setSelected({})}>
                            <div>
                                <h1 className="text-lg font-medium">{selected.locName}</h1>
                                <p>Vaccines are <span className={`${getColor(selected.status)}`}>{selected.status.toLowerCase()}</span> at this location.</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default VaccineMap;
