import { useState, useEffect } from 'react'
import {
    Accuracy,
    requestForegroundPermissionsAsync,
    watchPositionAsync
} from 'expo-location'


export default (shouldTrack, callback) => {
    const [error, setError] = useState('')
    const [subscriber,setSubscriber] = useState(null)

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
            setSubscriber(sub)
            if (!granted) {
                setError('Please enable location services')
            }
        } catch (e) {

        }
    }


    useEffect(() => {
        if(shouldTrack){
            startWatching()
        }else{
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])


    return [error]
}
