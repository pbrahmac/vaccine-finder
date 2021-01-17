import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/firestore'
import { useCollectionData } from "react-firebase-hooks/firestore";
import DataFetch from './DataFetch';
import VaccineMap from './VaccineMap';

const MapMaster = () => {
    const firebase = useContext(FirebaseContext)
    const firestore = firebase.firestore()

    const locationsRef = firestore.collection('locations')
    const query = locationsRef.orderBy('status')

    const [locations] = useCollectionData(query, {idField: 'id'})
    
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <DataFetch locations={locations} />
            </div>
            <div className="col-span-3">
                <VaccineMap locations={locations} />
            </div>
        </div>
    )
}

export default MapMaster
