import React from 'react'

const LocationCard = ({ location }) => {
    
    let boxStyle = "rounded-md px-8 py-2 max-w-lg hover:shadow-lg bg-gray-50"
   
    let statusColor = "text-sm text-right"
    if (location.status === "Available") {
        statusColor = statusColor.concat(" text-green-300")
    } else {
        statusColor = statusColor.concat(" text-red-300")
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const lastUpdatedObj = location.lastUpdatedDate.toDate()
    const numComments = location.numComments
    const lastUpdated = monthNames[lastUpdatedObj.getMonth()].concat(' ', String(lastUpdatedObj.getDate()).padStart(2, '0'), ', ', lastUpdatedObj.getFullYear())
    console.log(location)
    return (
        <div className={boxStyle}>
            <h1 className="text-base font-bold ">{location.locName}</h1>
            <h3 className="text-sm">{location.locAddress}</h3>
            
            <br/>
            <h3 className='bg-red-100'>{location.numComments} New Reports</h3>
            <h5 className={statusColor}>{location.status}</h5>
            <h5 className="text-sm text-right">{lastUpdated}</h5>
            <button className="rounded-full bg-blue-400 w-6">i</button>
        </div>
    )
}

export default LocationCard