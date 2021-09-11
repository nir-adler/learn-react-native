import createDataContext from '../context/createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'update_track_name':
            return { ...state, name: action.payload }
        case 'update_recording':
            return { ...state, recording: action.payload }
        case 'update_location':
            return { ...state, currentLocation: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'reset':
            return { ...state, name: '', locations: [] }
        default:
            return state
    }
}
const updateName = (dispatch) => (name) => {
    dispatch({ type: 'update_track_name', payload: name })
}

const reset = (dispatch) => () => {
    dispatch({ type: 'reset' })
}

const updateRecording = (dispatch) => (boolean) => {
    dispatch({ type: 'update_recording', payload: boolean })
}

const updateLocation = (dispatch) => (location, recording) => {
    if (location.coords.latitude < 34) {
        dispatch({ type: 'update_location', payload: location })
        // console.log(recording)
        if (recording) {
            // console.log('here')
            dispatch({ type: 'add_location', payload: location })
        }
    }
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { updateName, updateRecording, updateLocation, reset },
    { name: '', recording: false, locations: [], currentLocation: null }
)