import React, { useEffect, useState } from 'react'
import {
    requestForegroundPermissionsAsync,
    Accuracy,
    watchPositionAsync
} from 'expo-location'


export default (shouldTrack, callback) => {
    const [error, setError] = useState('')

    useEffect(() => {
        let trackPointer
        const stratTrack = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync()
                if (granted) {
                    trackPointer = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInter: 1000,
                        distanceInterval: 0
                    }, callback)
                } else {
                    setError('Please accept permissions!')
                }
            } catch (e) {
                console.log(e)
            }
        }

        if (shouldTrack) {
            stratTrack()
        } else {
            if (trackPointer) {
                trackPointer.remove()
            }
            trackPointer = null
        }

        return () => {
            if (trackPointer) {
                trackPointer.remove()
            }
        }

    }, [shouldTrack, callback])

    return [error]
}