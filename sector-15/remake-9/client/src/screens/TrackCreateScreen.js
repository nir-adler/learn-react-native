import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import { useIsFocused } from '@react-navigation/native'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockUpLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = () => {
    const { state: { recording }, updateCurrentLocation } = React.useContext(LocationContext)
    // console.log('out', recording)
    const callback = React.useCallback((location) => {
        updateCurrentLocation(location, recording)
    }, [recording])
    const isFocused = useIsFocused()
    const [error] = useLocation(isFocused,callback)

    return (
        <View>
            <Text>track create screen</Text>
            <Map />
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen