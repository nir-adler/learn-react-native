import { useState, useEffect } from 'react'
import {
    Accuracy,
    requestForegroundPermissionsAsync,
    watchPositionAsync
} from 'expo-location'


export default (shouldTrack, callback) => {
    const [error, setError] = useState('')
    // const [subscriber, setSubscriber] = useState(null)
    // const [recording, setSubscriber] = useState(null)





    useEffect(() => {
        let subscriber 
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    callback
                )
                subscriber=sub
                if (!granted) {
                    setError('Please enable location services')
                }
            } catch (e) {

            }
        }

        if (shouldTrack) {
            startWatching()
        } else {
            if(subscriber){
                subscriber.remove()
                subscriber=null
            }
        }
        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }
    }, [shouldTrack, callback])


    return [error]
}
