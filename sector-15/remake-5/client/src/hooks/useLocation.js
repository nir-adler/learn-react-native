import React, { useEffect, useState } from 'react'

import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'


export default (shouldTrack, callback) => {
    const [error, setError] = useState('')
    const [subscribe, setSubscribed] = useState(null)

    const startWatching = async () => {
        const { granted } = await requestForegroundPermissionsAsync()
        if (!granted) {
            setError('Please enable location services')
        } else {
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                callback(location)
            })
            setSubscribed(sub)
        }

    }

    useEffect(() => {
        if(shouldTrack){
            startWatching()
        }else{
            if(subscribe){
                subscribe.remove()
                setSubscribed(null)
            }
        }
    }, [shouldTrack,callback])


    return [error]
}