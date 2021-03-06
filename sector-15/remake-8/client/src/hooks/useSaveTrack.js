import React, { useContext } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext } from '../context/TrackContext'
import { navigate } from '../navigationRef'

export default () => {
    const { state: { name, locations }, reset } = useContext(LocationContext)
    const { createTrack } = useContext(TrackContext)


    const saveTrack = async () => {
        try {
            await createTrack(name, locations)
            reset()
            navigate('TrackList')
        } catch (e) {
            console.log(e)
        }

    }

    return [saveTrack]
}