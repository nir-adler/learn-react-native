import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({ route }) => {
    const { state } = React.useContext(TrackContext)
    const _id = route.params._id
    const track = state.find((track) => track._id === _id)

    console.log(track)

    return (
        <>
            <Spacer>
                <Text h2>{track.name}</Text>
            </Spacer>
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
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen