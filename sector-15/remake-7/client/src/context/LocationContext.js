import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'update_current_location':
            return { ...state, currentLocation: action.payload }
        case 'update_track_name':
            return { ...state, name: action.payload }
        case 'change_recording':
            return { ...state, recording: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }

        default:
            return state
    }
}

const updateTrackName = (dispatch) => (name) => {
    dispatch({ type: 'update_track_name', payload: name })
}

const addLocation = (dispatch) => (location, recording) => {
    // console.log(recording)
    dispatch({ type: 'update_current_location', payload: location })
    if (recording) {
        dispatch({ type: 'add_location', payload: recording })
    }
}

const changeRecording = (dispatch) => (boolean) => {
    dispatch({ type: 'change_recording', payload: boolean })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { addLocation, updateTrackName, changeRecording },
    { recording: false, name: '', locations: [], currentLocation: null }
)