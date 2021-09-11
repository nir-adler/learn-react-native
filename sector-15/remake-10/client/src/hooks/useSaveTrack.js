import * as React from 'react'
import {Context as LocationContext} from '../context/LocationContext'
import {Context as TrackContext} from '../context/TrackContext'
import * as RootNavigation from '../navigationRef'

export default ()=>{
    const {state:{locations,name},reset}=React.useContext(LocationContext)
    const {createTrack}=React.useContext(TrackContext)

    const saveTrack=async()=>{
        await createTrack(name,locations)
        reset()
        RootNavigation.navigate('TrackList')
    }

    return [saveTrack]
}