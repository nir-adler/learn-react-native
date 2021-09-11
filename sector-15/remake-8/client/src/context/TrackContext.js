import createDataContext from '../context/createDataContext'
import trackerApi from '../api/trackerApi'

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'update_tracks':
            return [...action.payload]
        default:
            return state
    }

}

const createTrack = (dispatch) => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', {
            name,
            locations
        })

    } catch (e) {
        throw e
    }
}

const fetchTracks = (dispatch) => async () => {
    try {   
        const response = await trackerApi.get('/tracks')
        dispatch({ type: 'update_tracks', payload: response.data.tracks })
    } catch (e) {
        console.log(e)
    }
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    []
)