import React, { useContext, useState } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth'
import 'firebase/firestore'

import { useAuthState } from "react-firebase-hooks/auth";
import useGeoPosition from "../utils/customHooks/useGeoPosition";
import SignIn from './SignIn';
import { comment } from 'postcss';

const ExitIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

const NewLocModal = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    const firestore = firebase.firestore()

    const locationsRef = firestore.collection('locations')

    const [user] = useAuthState(auth)
    const [showModal, setShowModal] = useState(false)

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [county, setCounty] = useState("")
    const [website, setWebsite] = useState("")
    const [contact, setContact] = useState("")
    const [radioOption, setRadioOption] = useState("")
    const [notes, setNotes] = useState("")

    //get coords
    const [position, loading, error] = useGeoPosition('AIzaSyAgSdjt0f1I1Oh0i9Zj3ESHMf8RHgRd0es', location)
    
    const formSubmit = async (e) => {
        e.preventDefault()
        console.log(name, location, zipCode, county, website, radioOption, notes)

        // Write to firebase here
        const newDoc = await locationsRef.add({
            contact: contact,
            coords: position,
            county: county,
            lastUpdatedDate: new Date(),
            locAddress: location,
            locName: name,
            status: radioOption,
            zipcode: zipCode
        })

        const commentsRef = locationsRef.doc(newDoc.id).collection('comments')
        await commentsRef.add({
            comment: notes,
            commentDate: new Date()
        })

        // reset form fields
        setName("")
        setLocation("")
        setZipCode("")
        setCounty("")
        setWebsite("")
        setContact("")
        setRadioOption("")
        setNotes("")
        // unshow the modal
        setShowModal(false)
    }
    
    return (
        <div>
            <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Add a Location
            </button>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Add a Location
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent align-middle text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <ExitIcon />
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            {user ? (
                                    <div className="relative flex-auto bg-gray-50">
                                        <form onSubmit={formSubmit}>
                                            <div className="grid grid-cols-4 gap-4 space-y-3 p-6">
                                                <div className="col-span-4">
                                                    <input 
                                                        type="text"
                                                        placeholder="Location Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                </div>
                                                <div className="col-span-2">
                                                    <input 
                                                        type="text"
                                                        placeholder="Location Address"
                                                        value={location}
                                                        onChange={(e) => setLocation(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                </div>
                                                <div className="col-span-1">
                                                    <input 
                                                        type="text"
                                                        placeholder="Zip Code"
                                                        value={zipCode}
                                                        onChange={(e) => setZipCode(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                </div>
                                                <div className="col-span-1">
                                                    <input 
                                                        type="text"
                                                        placeholder="County"
                                                        value={county}
                                                        onChange={(e) => setCounty(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                </div>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 col-span-3">
                                                    <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder="Link to Website About Location / Vaccine Info"
                                                        value={website}
                                                        onChange={(e) => setWebsite(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                                                </div>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 col-span-1">
                                                    <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder="Contact Number"
                                                        value={contact}
                                                        onChange={(e) => setContact(e.target.value)}
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                                                </div>
                                                <div className="col-start-2 col-span-2 w-full text-center">
                                                    <label className="ml-2 mr-6 text-gray-700 align-middle">
                                                        <input
                                                            type="radio"
                                                            value="available"
                                                            className="px-3 mr-2 placeholder-gray-400 text-green-500 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
                                                            checked={radioOption === "available"}
                                                            onChange={(e) => setRadioOption(e.target.value)}
                                                        />
                                                        Available
                                                    </label>
                                                    <label className="ml-2 mr-6 text-gray-700 align-middle">
                                                        <input
                                                            type="radio"
                                                            value="unavailable"
                                                            className="px-3 mr-2 placeholder-gray-400 text-red-500 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
                                                            checked={radioOption === "unavailable"}
                                                            onChange={(e) => setRadioOption(e.target.value)}
                                                        />
                                                        Unavailable
                                                    </label>
                                                    <label className="ml-2 mr-6 text-gray-700 align-middle">
                                                        <input
                                                            type="radio"
                                                            value="coming_soon"
                                                            className="px-3 mr-2 placeholder-gray-400 text-yellow-500 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
                                                            checked={radioOption === "coming_soon"}
                                                            onChange={(e) => setRadioOption(e.target.value)}
                                                        />
                                                        Coming Soon
                                                    </label>
                                                </div>
                                                <div className="col-start-2 col-span-2">
                                                    <textarea
                                                        placeholder="Any other notes"
                                                        value={notes}
                                                        onChange={(e) => setNotes(e.target.value)}
                                                        className="px-3 py-3 resize-y placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-5 bg-white border-t border-solid border-gray-300 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="grid grid-cols-3 grid-rows-3 relative p-6 flex-auto bg-gray-50">
                                            <div className="col-start-2 row-start-2">
                                                <SignIn isNavbar={false} />
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-5 border-t border-solid border-gray-300 rounded-b">
                                            <button
                                                className="bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setShowModal(false)}    
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default NewLocModal
