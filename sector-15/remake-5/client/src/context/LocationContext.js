import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'start_recording':
            return { ...state, recording: true }
        case 'stop_recording':
            return { ...state, recording: false }
        case 'change_track_name':
            return { ...state, name: action.payload }
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

const changeTrackName = (dispatch) => (trackName) => {
    dispatch({ type: 'change_track_name', payload: trackName })
}

const addLocation = (dispatch) => (location, recording) => {
    console.log(recording)
    dispatch({ type: 'add_current_location', payload: location })
    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }
}

const startRecording = (dispatch) => () => {
    dispatch({ type: 'start_recording' })
}

const stopRecording = (dispatch) => () => {
    dispatch({ type: 'stop_recording' })
}



export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        addLocation,
        startRecording,
        stopRecording,
        changeTrackName,
        reset
    },
    { name: '', currentLocation: null, recording: false, locations: [] },
)
