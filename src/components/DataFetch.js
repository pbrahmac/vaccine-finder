import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/firestore'
import { useCollectionData } from "react-firebase-hooks/firestore";
import LocationCard from './LocationCard';

const DataFetch = () => {
    const firebase = useContext(FirebaseContext)
    const firestore = firebase.firestore()

    const locationsRef = firestore.collection('locations')
    const query = locationsRef.orderBy('lastUpdatedDate')

    const [locations] = useCollectionData(query, {idField: 'id'})

    return (
        <div>
            {locations && locations.map((loc, idx) => <LocationCard key={idx} location={loc}/>)}
        </div>
    )
}

export default DataFetch
