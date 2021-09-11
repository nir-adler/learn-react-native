import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ route }) => {
    const { state } = React.useContext(TrackContext)
    const { _id } = route.params
    const track = state.find((track) => track._id === _id)
    console.log(track.locations[0].coords)
    return (
        <View>
            <MapView
                initialRegion={{
                    ...track.locations[0].coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                style={styles.map}
            >
                <Polyline
                    lineDashPattern={[0]}
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen