import React, { useState, useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth'
import 'firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from './SignIn';

const ExitIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

const LocationCard = ({ location }) => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()
    const firestore = firebase.firestore()

    const [user] = useAuthState(auth)
    const [showModal, setShowModal] = useState(false)

    const [comment, setComment] = useState("")

    const commentsRef = firestore.collection('locations').doc(location.id).collection('comments')
    const query = commentsRef.orderBy('commentDate')
    const [comments] = useCollectionData(query, { idField: 'id' })
    
    const Comment = ({ com }) => {
        const dateObj = com.commentDate.toDate()
        const dateString = monthNames[dateObj.getMonth()].concat(' ', String(dateObj.getDate()).padStart(2, '0'), ', ', dateObj.getFullYear())
        
        return (
            <div className="py-3 px-4 bg-gray-100 rounded shadow max-w-2xl hover:shadow-lg">
                <div className="">
                    {com.comment}
                </div>
                <div className="text-right text-gray-600 italic">
                    - {dateString}
                </div>
            </div>
        )
    }

    const formSubmit = async (e) => {
        e.preventDefault()

        // Write to firebase here
        await commentsRef.add({
            comment: comment,
            commentDate: new Date()
        })

        // reset form fields
        setComment("")
        // unshow the modal
    }
    
    let boxStyle = "rounded-md p-4 hover:shadow-lg bg-gray-50 grid"
    let statusColor = "text-sm text-center"
    let statusBoxColor = "w-24 rounded border-2 "
    let badgeColor = "text-right px-3 py-2 rounded-full"
    if (location.status.toLowerCase() === "available") {
        statusColor = statusColor.concat(" text-green-500")
        statusBoxColor = statusBoxColor.concat(" bg-green-200 border-green-400")
        badgeColor = badgeColor.concat(" bg-green-100 text-green-600")
    } else if (location.status.toLowerCase() === "coming_soon") {
        statusColor = statusColor.concat(" text-yellow-500")
        statusBoxColor = statusBoxColor.concat(" bg-yellow-200 border-yellow-400")
        badgeColor = badgeColor.concat(" bg-yellow-100 text-yellow-600")
    } else {
        statusColor = statusColor.concat(" text-red-500")
        statusBoxColor = statusBoxColor.concat(" bg-red-200 border-red-400")
        badgeColor = badgeColor.concat(" bg-red-100 text-red-600")
    }


    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const lastUpdatedObj = location.lastUpdatedDate.toDate()
    const lastUpdated = monthNames[lastUpdatedObj.getMonth()].concat(' ', String(lastUpdatedObj.getDate()).padStart(2, '0'), ', ', lastUpdatedObj.getFullYear())

    return (
        <div>
            <div className={boxStyle} onClick={() => setShowModal(true)}>
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
                                <div className="grid grid-auto-cols grid-rows-2 gap-4">
                                    <div className="col-start-1 row-start-1 col-span-3 row-span-2">
                                        <a href={`${location.website}`} className="hover:underline">
                                            <h3 className="text-3xl font-semibold">{location.locName}</h3>
                                            <h3 className="text-xl font-semibold">{location.locAddress}</h3>
                                        </a>
                                    </div>
                                    <div className="row-start-1 col-start-4">
                                        <p className={`${badgeColor}`}>{location.status}</p>
                                    </div>
                                    <div className="row-start-2 col-start-1 mt-5">
                                        <p><strong>Contact:</strong> {location.contact}</p>
                                    </div>
                                </div>
                            </div>
                            {/*body*/}
                            <div>
                                <form onSubmit={formSubmit} className="bg-gray-50 border-b border-solid border-gray-300">
                                    <div className="grid grid-flow-col gap-4 p-6 justify-items-center items-center">
                                        <div className="relative w-full col-span-4">
                                            <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Comment about this location"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                className="resize-y px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <button type="submit" className={`transition duration-300 text-sm font-medium ease-in-out px-3 py-2 rounded-md bg-blue-500 text-white ${user ? "opacity-100 hover:shadow-lg" : "opacity-50 cursor-not-allowed"}`}>Comment</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="grid grid-cols-1 gap-4 p-6">
                                    {comments && comments.map((com, idx) => (
                                        <div key={idx} className="justify-self-center">
                                            <Comment com={com}/>
                                        </div>
                                    ))}
                                </div>    
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-5 bg-white border-t border-solid border-gray-300 rounded-b-lg">
                                <button
                                    className="text-white bg-red-500 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default LocationCard