import React, { useCallback, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import TrackForm from '../components/TrackForm'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocation'
import { Ionicons } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, updateCurrentLocation } = useContext(LocationContext)
    // console.log(recording)
    const callback = useCallback((location) => {
        updateCurrentLocation(location, recording)
    }, [recording])

    const [error] = useLocation(isFocused || recording, callback)

    return (
        <View style={styles.container}>
            <Map />
            {error ? <Spacer><Text style={styles.errorMessage}>{error}</Text></Spacer> : null}
            <TrackForm />
        </View>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Ionicons name="add" size={24} color="black" />
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red'
    },
    container: {
        marginTop: 50
    }
})

export default withNavigationFocus(TrackCreateScreen)