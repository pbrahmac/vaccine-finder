import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/firestore'
import { useCollectionData } from "react-firebase-hooks/firestore";
import LocationCard from './LocationCard';

const DataFetch = () => {
    const firebase = useContext(FirebaseContext)
    const firestore = firebase.firestore()

    const locationsRef = firestore.collection('locations')
    const query = locationsRef.orderBy('status')

    const [locations] = useCollectionData(query, {idField: 'id'})

    return (
        <div className="grid grid-cols-1 gap-4 p-4">
            {locations && locations.map((loc, idx) => (
                <div>
                    <LocationCard key={idx} location={loc} />
                </div>
            ))}
        </div>
    )
}

export default DataFetch
