import React, { useEffect, useState, useContext, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Map from '../components/Map'
import '../_mockLocations'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { withNavigationFocus } from 'react-navigation'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(recording, location)
    }, [recording])
    const [error] = useLocation(isFocused || recording, callback)

    return (
        <View>
            <Map />
            {error ? <Spacer><Text style={styles.error}>{error}</Text></Spacer> : null}
            <TrackForm />
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})

export default withNavigationFocus(TrackCreateScreen)