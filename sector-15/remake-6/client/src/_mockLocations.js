import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

const getLocation = (inc) => {
    return {
        timestamp: 10000000,
        coords: {
            latitude: 32.064214 + inc * tenMetersWithDegrees,
            longitude: 34.775629 + inc * tenMetersWithDegrees,
        }
    }
}

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    }),
        counter++
}, 1000)