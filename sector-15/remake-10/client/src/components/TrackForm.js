import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from '../components/Spacer'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const [saveTrack] = useSaveTrack()
    const {
        state: { name, recording, locations },
        updateName,
        updateRecording
    } = React.useContext(LocationContext)

    return (
        <>
            <Input
                label='Track name'
                value={name}
                onChangeText={updateName}
            />
            <Spacer>

                {recording
                    ? <Button
                        title='Stop'
                        onPress={() => updateRecording(false)}
                    />
                    : <Button
                        title='Start Recording'
                        onPress={() => updateRecording(true)}
                    />}
                <Spacer />
                {!recording && locations.length
                    ? <Button
                        title='Save'
                        onPress={saveTrack}
                    />
                    : null}
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackForm