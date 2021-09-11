import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation
    } = useContext(LocationContext)
    const callback = useCallback(
        (location) => {
            addLocation(location, recording)
        },
        [recording]
    )
    const [error] = useLocation(isFocused || recording, callback)

    return (
        <View style={styles.container}>
            <Text h2>Create a Track</Text>
            <Map />
            {error ? <Spacer><Text style={styles.errorMessage}>{error}</Text></Spacer> : null}
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
    },
    errorMessage: {
        color: 'red'
    }
})


export default withNavigationFocus(TrackCreateScreen)