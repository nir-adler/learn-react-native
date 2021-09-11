import React, { useContext, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'
import Spacer from '../components/Spacer'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    // console.log(recording)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])

    const [error] = useLocation(isFocused, callback)

    return (
        <View style={styles.container}>
            <Map />
            {error ? <Spacer><Text style={styles.errorMessage}>{error}</Text></Spacer> : null}
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    errorMessage: {
        color: 'red'
    }
})

export default withNavigationFocus(TrackCreateScreen)