import * as Location from 'expo-location'

const tenMetersWithDegree = 0.0001

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            latitude: 32.063434 + increment * tenMetersWithDegree,
            longitude: 34.778801 + increment * tenMetersWithDegree,
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