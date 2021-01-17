import React from 'react'

const LocationCard = ({ location }) => {
    
    let boxStyle = "rounded-md px-8 py-2 max-w-lg border border-black hover:shadow-lg "
    if (location.status.toLowerCase() === "available") {
        boxStyle = boxStyle.concat(" bg-green-50")
    } else {
        boxStyle = boxStyle.concat(" bg-red-50")
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const lastUpdatedObj = location.lastUpdatedDate.toDate()
    const lastUpdated = monthNames[lastUpdatedObj.getMonth()].concat(' ', String(lastUpdatedObj.getDate()).padStart(2, '0'), ', ', lastUpdatedObj.getFullYear())

    return (
        <div className={boxStyle}>
            <h1 className="text-xl font-bold">{location.locName}</h1>
            <h3 className="text-lg">{location.locAddress}</h3>
            <br/>
            <h5 className="text-base text-right">{lastUpdated}</h5>
        </div>
    )
}

export default LocationCard