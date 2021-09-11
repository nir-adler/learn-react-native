import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'


const TrackForm = () => {
    const { state: { name, recording },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    return (
        <>
            <Spacer>
                <Input
                    label='Track Name'
                    value={name}
                    onChangeText={changeName}
                />
            </Spacer>
            {recording
                ? <Button
                    title='Stop Recording'
                    onPress={stopRecording}
                />
                :
                <Button
                    title='Start Recording'
                    onPress={startRecording}
                />
            }

        </>
    )
}

export default TrackForm