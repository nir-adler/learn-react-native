import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { requestForegroundPermissionsAsync } from 'expo-location'


const CreateTrackScreen = () => {
    const [error, setError] = useState(null)


    const startWatching = async () => {
        try {
            const resposne = await requestForegroundPermissionsAsync()
            console.log(resposne)
            if(resposne.status ==='denied'){
                throw new Error()
            }
        } catch (e) {
            console.log('error')
            setError(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])
    return (
        <SafeAreaView
            fonrceInsert={{ top: 'always' }}
        >
            <Text h3>Craete a Track</Text>
            <Map />
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default CreateTrackScreen