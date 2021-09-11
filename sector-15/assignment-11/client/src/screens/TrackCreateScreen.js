import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'



const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])
    const [error] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />

            {error ? <Spacer><Text>{error}</Text></Spacer> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title:'Add Trrack',
    tabBarIcon:<FontAwesome name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)