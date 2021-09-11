import { useEffect, useState } from 'react'
import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'


export default (shouldTrack, callback) => {
    const [error, setError] = useState('')
    let watchFunciton
    // console.log(shouldTrack)
    useEffect(() => {

        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync()
                // console.log(granted)
                if (!granted) {
                    throw new Error('Location permission not granted')
                }
                watchFunciton = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    // console.log(location)

                    callback(location)
                })
            } catch (e) {
                console.log(e)
                setError('Location permission not granted')
            }
        }

        if (shouldTrack) {
            startWatching()
        } else {
            if (watchFunciton) {
                watchFunciton.remove()
            }
        }
    }, [shouldTrack, callback])

    return [error]
}