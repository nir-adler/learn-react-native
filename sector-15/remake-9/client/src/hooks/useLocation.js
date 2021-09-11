import * as React from 'react'
import * as Location from 'expo-location'

export default (shouldTrack, callback) => {
    const [error, setError] = React.useState('')
    // console.log(callback.toString())

    React.useEffect(() => {
        // console.log('loop')
        let locationLoop
        const trackLocation = async () => {
            try {
                const { granted } = await Location.requestForegroundPermissionsAsync()
                if (granted) {
                    locationLoop = await Location.watchPositionAsync({
                        accuracy: Location.Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 0
                    }, callback)
                }
            } catch (e) {
                setError('There was an error')
            }
        }

        if (shouldTrack) {
            trackLocation()
        } else {
            if (locationLoop) {
                locationLoop.remove()
            }
        }

        return () => {
            if (locationLoop) {
                locationLoop.remove()
            }
        }

    }, [shouldTrack,callback]);

    return [error]
}