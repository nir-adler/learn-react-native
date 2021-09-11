import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'update_current_location':
            return { ...state, currentLocation: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'change_track_name':
            return { ...state, trackName: action.payload }
        case 'change_recording':
            return { ...state, recording: action.payload }
        case 'reset':
            return { ...state, locations: [], trackName: '' }
        default:
            return state
    }

}

const reset = (dispatch) =>  () => {
    dispatch({ type: 'reset' })
}

const changeTrackName = (dispatch) => (name) => {
    dispatch({ type: 'change_track_name', payload: name })
}

const addLocation = (dispatch) => async (recording, location) => {
    try {
        dispatch({ type: 'update_current_location', payload: location })
        if (recording) {
            dispatch({ type: 'add_location', payload: location })
        }
    } catch (e) {

    }
}

const changeRecording = (dispatch) => (boolean) => {
    // console.log(boolean)
    dispatch({ type: 'change_recording', payload: boolean })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { addLocation, changeTrackName, changeRecording, reset },
    { currentLocation: null, locations: [], recording: false, trackName: '' }
)