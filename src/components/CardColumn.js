import React, { useState } from 'react'
import LocationCard from './LocationCard';

const CardColumn = ({ locations }) => {

    const [filter, setFilter] = useState('');
    const fruit = ['apple', 'banana', 'orange', 'grapefruit',
        'mango', 'strawberry', 'peach', 'apricot'];

    console.log(locations)



    return (
        <div className="grid grid-cols-1 gap-4 p-4">

            <div className="flex flex-row bg-pink-200">
                <input className="flex-1 p-2 placeholder-gray-500 placeholder-opacity-75"
                    placeholder="Zip code"
                    onChange={event => setFilter(event.target.value)}
                ></input>
                <button className="pl-3 pr-3 bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">Search</button>
            </div>

            <ul>

      {fruit.filter(f => f.includes(filter) || filter === '')
            .map(f => <li key={f}>{f}</li>)}
      </ul>
     
{locations && locations.map((loc, idx) => (
                <div key={idx}>
                    <LocationCard location={loc} />
                </div>
            ))}
        
        </div>
    )
}

export default CardColumn
