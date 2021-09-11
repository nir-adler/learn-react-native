import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        case 'update_current_locaion':
            return { ...state, currentLocation: action.payload }
        case 'update_track_name':
            return { ...state, name: action.payload }
        case 'change_recording':
            return { ...state, recording: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'reset':
            return { ...state, locations: [], name: '' }
        default:
            return state
    }
}

const reset = (dispatch) => () => {
    dispatch({ type: 'reset' })
}

const changeRecording = (dispatch) => (boolean) => {
    dispatch({ type: 'change_recording', payload: boolean })
}

const updateTrackName = (dispatch) => (trackName) => {
    dispatch({ type: 'update_track_name', payload: trackName })
}


const updateCurrentLocation = (dispatch) => (location, recording) => {
    dispatch({ type: 'update_current_locaion', payload: location })
    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { updateCurrentLocation, updateTrackName, changeRecording, reset },
    { name: '', locations: [], currentLocation: null, recording: false }
)