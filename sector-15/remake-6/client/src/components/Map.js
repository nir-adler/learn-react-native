import React, { useContext } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { SafeAreaView } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)
    // console.log(locations.map(loc => loc.coords))
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    } else {

        return (
            <SafeAreaView
                forceInset={{ top: 'always' }}
                style={styles.container}
            >

                <MapView
                    initialRegion={{
                        latitude: 32.064214,
                        longitude: 34.775629,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    style={styles.map}
                >
                    <Circle
                        center={{ ...currentLocation.coords }}
                        radius={40}
                    />
                    <Polyline
                        lineDashPattern={[0]}
                        coordinates={locations.map(loc => loc.coords)}
                    />
                </MapView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: 300
    },
    container: {
        marginTop: 50
    }
})

export default Map