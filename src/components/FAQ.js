import React from 'react'

const FAQ = ({  }) => {
    
    let btnStyle = "p-2 border-4 border-blue-200 border-opacity-50 rounded-lg text-white text-opacity-75 hover:bg-white-200"

    return (
        <div className="grid m-10 rounded-2xl pt-10 pb-10 bg-gradient-to-b from-green-400 to-blue-500 justify-items-center text-white">
        <div className="grid mt-10 rounded-2xl mb-10">
           <h1 className="text-5xl mt-10 mb-10 text-gray text-opacity-85 font-sa text-center"><b>FAQ</b></h1>
           <h2 className="text-2xl ml-20 mb-5 text-gray text-opacity-75 max-w-5xl text-left"><b>How to use this tool?</b></h2>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> Voice-search by clicking on the Alan button at the bottom right or manual search. <br></br><br></br>Users can search for Covid vaccines at their closest locations by entering the City or Zip Code they’re in. The list of providers displays vaccine availability, a timestamp of the last update, address and contact information of the provider. 
By clicking on 'More Details' for each location, users can view the feedback/comments from verified volunteers who last visited or got an appointment at that particular location.
Resources tab provides links to latest Government news and regulations, CDC Health guidelines, Covid-19 Vaccine Phases/Availability news.
</h4><br></br><br></br>
           <h2 className="text-2xl ml-20 mb-5 text-gray text-opacity-75 max-w-5xl text-left"><b>Does this website have accurate information?</b></h2>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> We only update details we received from the location when we last called them (view timestamp at each location). Each provider has different operating hours and appointment scheduling systems.</h4><br></br><br></br>
           <h2 className="text-2xl ml-20 mb-5 text-gray text-opacity-75 max-w-5xl text-left"><b>How can I help?</b></h2>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> We are looking to raise awareness of this tool and keep the information as up-to-date as possible.</h4><br></br>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> Please fill out the “Add a Location” form if you know of a vaccine provider that is not already listed.</h4><br></br>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> <b>Medical Providers</b> – if you have updates on a specific location, please email the location address, availability, the type of vaccine and phase being served, and any other information you would like us to know to <a href="mailto:snraghav1122@gmail.com">snraghav1122@gmail.com</a></h4><br></br>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> <b>Volunteers</b> – we’re seeking for volunteers who can call the locations and update the details on this website. Please email  <a href="mailto:pallavi.sreeram6@gmail.com">pallavi.sreeram6@gmail.com</a></h4><br></br>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> <b>Media/News Reporters</b> – we would love to inform everyone about this tool so please email <a href="mailto:pbrahmac@gmail.com">pbrahmac@gmail.com</a></h4><br></br>
            <h4 className="text-1xl ml-20 text-gray text-opacity75 max-w-5xl text-left"> We’ll be in touch soon. Thank you!</h4>
           
        </div>
        </div>
    )
}

export default FAQ