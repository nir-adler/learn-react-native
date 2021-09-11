import createDataContext from '../context/createDataContext'
import trackerApi from '../api/trackerApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { ...state, token: action.payload }
        case 'signout':
            return { ...state, token: null }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state

    }

}

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('authFlow')
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('authFlow')
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (e) {
        dispatch({ type: 'add_error', payload: e.response.data.error })

    }

}
const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })


    } catch (e) {
        dispatch({ type: 'add_error', payload: e.response.data.error })

    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { errorMessage: '', token: null }
)