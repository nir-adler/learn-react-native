import '../_mockLocation'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from '../components/Spacer'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'



const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)

    const [error] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording)
    })
    // console.log(isFocused)
    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />

            {error ? <Spacer><Text>{error}</Text></Spacer> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)