import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { useIsFocused } from '@react-navigation/native'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocation'


const TrackCreateScreen = () => {
    const { state: { recording }, updateLocation } = React.useContext(LocationContext)
   
    const isFocused = useIsFocused()
    const callback = React.useCallback((location) => {
        updateLocation(location, recording)
    }, [recording])
    const [error] = useLocation(isFocused, callback)
    return (
        <View style={styles.container}>
            <Map />
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})

export default TrackCreateScreen