import React from 'react'
import { Text, StyleSheet } from 'react-native'
import MapView, { Polyline, MapViewDirections } from 'react-native-maps'

const Map = () => {
    let points = []

    for (let i = 1; i < 20; i++) {
        points.push({
            latitude: 37.33233 + i * 0.001,
            longitude: -122.03121 + i * 0.001,

        })
    }




    return <MapView
        style={styles.map}
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,

        }}
    >
        {/* <MapViewDirections
            lineDashPattern={[0]}


        /> */}
        <Polyline
            lineDashPattern={[0]}
            coordinates={points}
        />


    </MapView>
}

const styles = StyleSheet.create({
    map: {
        // width:100,
        height: 300
    }
})

export default Map