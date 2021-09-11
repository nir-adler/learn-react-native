import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'


const TrackForm = () => {
    const {
        state: { name, recording, locations },
        updateName,
        changeRecording
    } = React.useContext(LocationContext)
    const [saveTrack]=useSaveTrack()

    return (
        <Spacer>
            <Input
                label='Track Name'
                value={name}
                onChangeText={updateName}
            />
            {recording
                ? < Button
                    title='Stop'
                    onPress={() => changeRecording(false)}
                />
                :
                <Button
                    title='Start Recording'
                    onPress={() => changeRecording(true)}
                />
            }
            {!recording && locations.length
                ? <Button
                    title='Save Track'
                    onPress={saveTrack}
                />
                : null}
        </Spacer>
    )
}


export default TrackForm
