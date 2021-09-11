import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload

        default:
            return state
    }
}

const fetchTracks = (dispatch) => async () => {
    try {
        const response = await trackerApi.get('/tracks')
        // console.log(response.data)
        dispatch({type:'fetch_tracks',payload:response.data.tracks})
    } catch (e) {
        console.log(e.response.data)
    }
}

const createTrack = (dispatch) => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', {
            name,
            locations,
        })
    } catch (e) {
        console.log(e.response.data)
    }
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    {}
)