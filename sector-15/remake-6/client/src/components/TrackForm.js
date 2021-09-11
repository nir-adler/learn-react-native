import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const [saveTrack] = useSaveTrack()


    const {
        state:
        { locations, recording, trackName },
        changeTrackName,
        changeRecording
    } = useContext(LocationContext)

    return (
        <Spacer>
            <Input
                label='Track Name'
                value={trackName}
                onChangeText={changeTrackName}
            />
            {recording
                ?
                <Button
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
                    onPress={saveTrack}
                />
                : null}
        </Spacer>
    )
}

const styles = StyleSheet.create({})

export default TrackForm