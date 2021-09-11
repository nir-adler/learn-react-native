import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from '../components/Spacer'



const TrackCreateScreen = () => {
    const [error, setError] = useState('')
    const { addLocation } = useContext(LocationContext)

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            const location = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                // console.log(location)
                addLocation(location)
            })
            // console.log('aaaaa', location)
            // console.log(granted)
            if (!granted) {
                setError('Please enable location services')
            }
        } catch (e) {
            // console.log(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {error ? <Spacer><Text>{error}</Text></Spacer> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen