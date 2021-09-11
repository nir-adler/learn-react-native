import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const {
        state: { recording, locations, name },
        startRecording,
        stopRecording,
        changeTrackName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    return (
        <Spacer>
            <Input
                label='Track Name'
                autoCurrent={false}
                autoCapital='none'
                value={name}
                onChangeText={changeTrackName}
            />
            {recording
                ? <Button
                    title='Stop Recording'

                    onPress={stopRecording}
                />
                : <Button
                    title='Start Recording'

                    onPress={startRecording}
                />
            }

            {locations.length && !recording
                ? <Button
                    title='Save'
                    onPress={saveTrack}
                />
                : null}
        </Spacer>
    )


}


export default TrackForm