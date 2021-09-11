import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return [...action.payload]
        default:
            return state
    }
}

const createTrack = (dispatch) => async (trackName, locations) => {
    try {
        await trackerApi.post('/tracks', {
            name: trackName,
            locations
        })
    } catch (e) {
        console.log(e.response.data)
    }
}

const fetchTracks = (dispatch) => async () => {
    try {
        const response = await trackerApi.get('/tracks')
        dispatch({ type: 'fetch_tracks', payload: response.data.tracks })
    } catch (e) {
        console.log(e.response.data)
    }
}


export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    []
)