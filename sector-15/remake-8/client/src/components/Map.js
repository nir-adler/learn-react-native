import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    // console.log(locations.map(loc=>loc.coords))
    if (!currentLocation) {
        return <ActivityIndicator size="small" color="#0000ff" />
    } else {
        return <MapView
            initialRegion={{
                latitude: 32.066581,
                longitude: 34.784482,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Circle
                center={{
                    ...currentLocation.coords
                }}
                radius={30}
            />

            <Polyline
                lineDashPattern={[0]}
                coordinates={locations.map(loc => loc.coords)}
            />
        </MapView>
    }

}

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
})

export default Map