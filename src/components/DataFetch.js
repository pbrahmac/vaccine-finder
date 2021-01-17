import React from 'react'
import LocationCard from './LocationCard';

const DataFetch = ({locations}) => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            {locations && locations.map((loc, idx) => (
                <div key={idx}>
                    <LocationCard location={loc} />
                </div>
            ))}
        </div>
    )
}

export default DataFetch
