import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)

    if (!currentLocation) {
        return null
    } else {
        return <MapView

            initialRegion={{
                latitude: 32.064440,
                longitude: 34.775896,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Circle
                center={{ ...currentLocation.coords }}
                radius={20}
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