import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const [saveTrack] = useSaveTrack()

    const {
        state: { recording, locations, name },
        updateTrackName,
        changeRecording
    } = useContext(LocationContext)

    return (
        <>
            <Spacer />
            <Input
                label='Track Name'
                value={name}
                onChangeText={updateTrackName}
            />
            {recording
                ? <Button
                    title='Stop'
                    onPress={() => changeRecording(false)}
                />
                : <Button
                    title='Start Recording'
                    onPress={() => changeRecording(true)}
                />}
            <Spacer />
            {!recording && locations.length
                ? <Button
                    title='save'
                    onPress={saveTrack}
                />
                : null}
        </>
    )
}

const styles = StyleSheet.create({})


export default TrackForm