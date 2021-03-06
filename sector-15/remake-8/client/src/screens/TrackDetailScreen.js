import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import { Text } from 'react-native-elements'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const { state } = useContext(TrackContext)
    const track = state.find(loc => loc._id === _id)
    // console.log(track)
    return (
        < >
            <Text>{track.name}</Text>
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