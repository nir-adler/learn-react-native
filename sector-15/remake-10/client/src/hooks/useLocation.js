import * as React from 'react'
import * as Location from 'expo-location'

export default (shouldTrack, callback) => {
    const [error, setError] = React.useState('')


    React.useEffect(() => {
        let trackerFunction
        const startTrack = async () => {
            try {
                const { granted } = await Location.requestForegroundPermissionsAsync()
                if (granted) {
                    trackerFunction = await Location.watchPositionAsync({
                        accuracy: Location.Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 0
                    }, callback)
                }

            } catch (e) {

            }
        }

        if (shouldTrack) {
            startTrack()
        } else {
            if (trackerFunction) {
                trackerFunction.remove()
                trackerFunction = null
            }
        }

        return () => {
            if (trackerFunction) {
                trackerFunction.remove()
            }
        }

    }, [shouldTrack, callback])


    return [error]

}