import React, { useEffect, useState } from 'react'
import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null)

    let watchFunctionPointer
    useEffect(() => {
        const watchLocation = async () => {
            const { granted } = await requestForegroundPermissionsAsync()
            if (!granted) {
                setError('Please accept location permission')
            } else {
                watchFunctionPointer = watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 0
                }, (location) => {
                    callback(location)
                })
            }

        }

        if (shouldTrack) {
            watchLocation()
        } else {
            if (watchFunctionPointer) {
                watchFunctionPointer.remove()
            }
        }


    }, [shouldTrack, callback])

    return [error]
}