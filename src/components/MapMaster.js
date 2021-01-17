import React, { useContext } from 'react'
import { FirebaseContext } from "../utils/firebase";
import 'firebase/firestore'
import { useCollectionData } from "react-firebase-hooks/firestore";
import CardColumn from './CardColumn';
import VaccineMap from './VaccineMap';

const MapMaster = () => {
    const firebase = useContext(FirebaseContext)
    const firestore = firebase.firestore()

    const locationsRef = firestore.collection('locations')
    const query = locationsRef.orderBy('status')

    const [locations] = useCollectionData(query, {idField: 'id'})
    
    return (
        <div className="grid grid-cols-4 m-10 bg-gray-700">
            <div className="col-span-1">
                <CardColumn locations={locations} />
            </div>
            <div className="col-span-3 p-3">
                <VaccineMap locations={locations} />
            </div>
        </div>
    )
}

export default MapMaster
