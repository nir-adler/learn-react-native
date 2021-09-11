import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'


const Map = () => {
    const {
        state: { currentLocation, locations }
    } = useContext(LocationContext)
    const points = []

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    } else {

        return <MapView
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Polyline
            lineDashPattern={[0]}
            coordinates={locations.map(loc=>loc.coords)}
        />
            <Circle
                center={currentLocation.coords}
                radius={50}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
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