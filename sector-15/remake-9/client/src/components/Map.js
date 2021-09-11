import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation, locations } } = React.useContext(LocationContext)
    // console.log(currentLocation)

    if (!currentLocation) {
        return null
    } else {

        return <MapView

            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Polyline
                lineDashPattern={[0]}
                coordinates={locations.map(loc => loc.coords)}
            />
            <Circle
                center={{
                    ...currentLocation.coords
                }}
                radius={30}
            />
        </MapView>
    }

}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
