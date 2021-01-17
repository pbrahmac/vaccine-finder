import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './SignOut';
import SignIn from './SignIn';

const Navbar = () => {
    const firebase = useContext(FirebaseContext)
    const auth = firebase.auth()

    const [user] = useAuthState(auth)
    
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between" style={{minHeight: "10vh"}}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Closed menu icon */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Open menu icon */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center p-2 rounded-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.428 15.4282C19.1488 15.149 18.7932 14.9587 18.406 14.8812L16.0185 14.4037C14.7101 14.1421 13.3519 14.324 12.1585 14.9207L11.8411 15.0793C10.6477 15.676 9.28948 15.8579 7.98113 15.5963L6.04938 15.2099C5.39366 15.0788 4.71578 15.284 4.24294 15.7569M7.9998 4H15.9998L14.9998 5V10.1716C14.9998 10.702 15.2105 11.2107 15.5856 11.5858L20.5856 16.5858C21.8455 17.8457 20.9532 20 19.1714 20H4.82823C3.04642 20 2.15409 17.8457 3.41401 16.5858L8.41402 11.5858C8.78909 11.2107 8.9998 10.702 8.9998 10.1716V5L7.9998 4Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className="text-xl text-white font-bold ml-2">VaccineCA</p>
                        </div>
                        <ul className="hidden sm:flex space-x-4 items-center sm:ml-6">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <li><a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a></li>
                            <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add a Location</a></li>
                            <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resources</a></li>
                            <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Volunteer</a></li>
                            <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Donate</a></li>
                        </ul>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div>
                                {user ? <SignOut /> : <SignIn />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
