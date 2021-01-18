import React from 'react'

const Resources = () => {
    
    // let btnStyle = "p-2 border-4 border-blue-200 border-opacity-50 rounded-lg text-white text-opacity-75 hover:bg-white-200"

    return (
        <div className="grid m-10 rounded-2xl pt-10 pb-10 bg-gradient-to-b from-green-400 to-blue-500 justify-items-center text-white">
        <div className="grid mt-10 rounded-2xl mb-10">
           <h1 className="text-5xl mt-10 mb-10 text-gray text-opacity-85 font-sa text-center">Resources</h1>
           
           <h4 className="text-2xl mb-5 ml-20 text-gray text-opacity-75 max-w-5xl">CDC COVID-19 Vaccination - <a href= "https://www.cdc.gov/vaccines/covid-19/index.html">https://www.cdc.gov/vaccines/covid-19/index.html</a>
</h4>
            <h4 className="text-2xl mb-5 ml-20 text-gray text-opacity-75 max-w-5xl">CMS Covid-19 Vaccine Policies and Guidelines - <a href= "https://www.cms.gov/covidvax">https://www.cms.gov/covidvax</a>
</h4>
           <h4 className="text-2xl mb-5 ml-20 text-gray text-opacity-75 max-w-5xl">CDC COVID Data Tracker (updated daily) - <a href= "https://covid.cdc.gov/covid-data-tracker/">https://covid.cdc.gov/covid-data-tracker/</a>
</h4>
            <h4 className="text-2xl mb-5 ml-20 text-gray text-opacity-75 max-w-5xl">Coronavirus Live Updates - <a href= "https://www.wsj.com/livecoverage/covid-2021-01-15">https://www.wsj.com/livecoverage/covid-2021-01-15</a>
</h4>


        </div>
        </div>
    )
}

export default Resources