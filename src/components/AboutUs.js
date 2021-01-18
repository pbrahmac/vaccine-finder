import React from 'react'

const AboutUs = () => {
    
    // let btnStyle = "p-2 border-4 border-blue-200 border-opacity-50 rounded-lg text-white text-opacity-75 hover:bg-white-200"

    return (
        <div className="grid m-10 rounded-2xl pt-32 pb-32 bg-gradient-to-b from-green-400 to-blue-500 justify-items-center text-white">
        <div className="grid mt-10 rounded-2xl mb-10 justify-items-center">
           <h1 className="text-5xl mt-10 mb-10 text-white text-opacity-85 font-sa text-center">About Us</h1>
           <h3 className="text-2xl mb-10 text-gray text-opacity-75 max-w-5xl text-center">A voice-enabled, real-time monitoring and crowdsourced platform to inform everyone in the US about COVID-19 vaccine provider locations, availability, appointments, and resources. <br></br>
This tool is built to make vaccine provider information easily accessible and decrease the load on the thousands of calls hospitals are currently receiving. We aim to save time and effort for people looking to get vaccinated by not having to call dozens of hospitals to get an appointment. 
</h3>

        
        </div>
        </div>
    )
}

export default AboutUs