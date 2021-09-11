import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'


const TrackForm = () => {
    const {
        state: { name, locations, recording },
        updateTrackName,
        changeRecording
    } = useContext(LocationContext)

    return (
        <>
            <Spacer />
            <Input
                label='Enter Track Name'
                value={name}
                onChangeText={updateTrackName}
            />
            {recording
                ? <Button
                    title='Stop Recording'
                    onPress={() => changeRecording(false)}
                />
                : <Button
                    title='Start Recording'
                    onPress={() => changeRecording(true)}
                />
            }
            <Spacer />
            {!recording && locations.length
                ? <Button
                    title='Save'
                />
                : null}
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackForm