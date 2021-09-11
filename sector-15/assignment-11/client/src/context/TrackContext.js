import createDataContext from '../context/createDataContext'
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
    try{
        const resposne=await trackerApi.get('/tracks')
        dispatch({type:'fetch_tracks',payload:resposne.data.tracks})
    }catch(e){

    }

}
const createTrack = (dispatch) => async (name, locations) => {
    console.log(name, locations.length)
    try {
        await trackerApi.post('/tracks', {
            name,
            locations
        })
    } catch (e) {

    }

}


export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)