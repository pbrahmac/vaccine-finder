import React from 'react'

const LocationCard = ({ location }) => {
    
    let boxStyle = "rounded-md p-4 hover:shadow-lg bg-gray-50 grid"
   
    let statusColor = "text-sm text-center"

    let statusBoxColor = "w-24 rounded border-2 "

    if (location.status === "Available") {
        statusColor = statusColor.concat(" text-green-500")
        statusBoxColor = statusBoxColor.concat(" bg-green-200 border-green-400")
    } else {
        statusColor = statusColor.concat(" text-red-500")
        statusBoxColor = statusBoxColor.concat(" bg-red-200 border-red-400")
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


            <div className={statusBoxColor}>
                 <h5 className={statusColor}>{location.status}</h5>
            </div>
            

            <div className='bg-yellow-100 text-sm rounded w-28 mt-2 pl-2 pr-2 justify-self-end text-gray-800 underline'>{location.numComments} New Reports</div>
            <h5 className="text-xs text-right mt-2 text-gray-500">Last updated {lastUpdated}</h5>
            {/* <button className="rounded bg-gradient-to-r from-blue-400 to-blue-500 text-sm p-1 text-white">More Details ></button> */}
        </div>
    )
}

export default LocationCard