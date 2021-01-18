import React, { useState } from 'react'
import LocationCard from './LocationCard';

const CardColumn = ({ locations }) => {

    const [filter, setFilter] = useState('');

    const fruit = ['apple', 'banana', 'orange', 'grapefruit',
        'mango', 'strawberry', 'peach', 'apricot'];

    console.log(locations)

    return (
        <div className="grid grid-cols-1 gap-4 p-4 overflow-auto" style={{"maxHeight": '80vh'}}>

            <div className="flex flex-row">
                <input className="px-3 py-3 placeholder-gray-400 rounded-l text-gray-700 relative bg-white text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                    placeholder="City or Zip code"
                    onChange={event => setFilter(event.target.value)}
                ></input>
                <button className="pl-3 pr-3 bg-indigo-500 rounded-r-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">Search</button>
            </div>



            {locations && locations.filter(loc => loc.locName.toLowerCase().includes(filter.toLowerCase()) || loc.locAddress.toLowerCase().includes(filter.toLowerCase())).map((loc, idx) => (
                <div key={idx}>
                    <LocationCard location={loc} />
                </div>
            ))}



        </div>
    )
}

export default CardColumn
