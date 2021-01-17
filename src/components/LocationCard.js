import React from 'react'

const LocationCard = ({ location }) => {
    
    return (
        <div className="bg-gray-200 rounded-md shadow">
            <h1 className="text-xl">{ location.locAddress }</h1>
        </div>
    )
}

export default LocationCard
