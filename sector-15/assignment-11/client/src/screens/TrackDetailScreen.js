import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline, Circle } from 'react-native-maps'

//               



const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext)
    const id = navigation.getParam('id')
    const track = state.find((t) => t._id === id)
    const initialCoords=track.locations[0].coords

    return (
        <>
            <MapView

                initialRegion={{
                    ...initialCoords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.1
                }}
                style={styles.map}
            >
                <Polyline
                    lineDashPattern={[0]}
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
        </>
    )
}

// TrackDetailScreen.navigationOptions={
//     headerShown:false
// }

const styles = StyleSheet.create({
    map:{
        height:300
    }
})

export default TrackDetailScreen