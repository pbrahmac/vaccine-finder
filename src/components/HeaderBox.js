import React from 'react'

const HeaderBox = () => {
    

    let btnStyle = "p-2 border-4 border-blue-200 border-opacity-50 rounded-lg text-white text-opacity-85 hover:bg-white-200"

    const scrollTop = () =>{
        window.scrollTo({top: 750, behavior: 'smooth'});
     };

    return (
        <div className="grid m-10 rounded-2xl pt-40 pb-40 bg-gradient-to-b from-green-500 to-blue-500 justify-items-center">
           <h1 className="text-5xl tracking-wider mt-10 mb-10 text-white text-opacity-85 font-sa">VaccineFinder</h1>
           <h2 className="text-2xl mb-10 text-white text-opacity-85">Find COVID-19 Vaccine Providers Nearby</h2>

           <div className="flex mb-10 text-lg grid-cols-3 gap-4 space-x-4">
               <button className={btnStyle} onClick={scrollTop} >Find Locations</button>
               <button className={btnStyle}>Add a Location</button>
               <button className={btnStyle}>Resources</button>
               
           </div>
        </div>
    )
}

export default HeaderBox