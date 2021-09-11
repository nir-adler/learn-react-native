import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'update_current_location':
            return { ...state, currentLocation: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'update_route_name':
            return { ...state, name: action.payload }
        case 'change_recording':
            return { ...state, recording: action.payload }
        case 'reset':
            return { ...state, locations: [], name: '' }
        default:
            return state
    }
}

const reset = (dispatch) => (boolean) => {
    dispatch({ type: 'reset' })
}

const changeRecording = (dispatch) => (boolean) => {
    dispatch({ type: 'change_recording', payload: boolean })
}

const updateName = (dispatch) => (name) => {
    dispatch({ type: 'update_route_name', payload: name })
}

const updateCurrentLocation = (dispatch) => (location, recording) => {
    if (location.coords.latitude < 34) {
        // console.log('in ', recording, location.coords.latitude)
        dispatch({ type: 'update_current_location', payload: location })
        if (recording) {
            dispatch({ type: 'add_location', payload: location })
        }
    }
}


export const { Context, Provider } = createDataContext(
    locationReducer,
    { updateCurrentLocation, updateName, changeRecording, reset },
    { name: '', locations: [], currentLocation: null, recording: false },
)