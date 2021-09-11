import createDataContext from '../context/createDataContext'
import trackerApi from '../api/trackerApi'
import { navigate } from '../navigationRef'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { ...state, token: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
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

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    navigate('authFlow')
}


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', {
            email,
            password
        })
        // console.log(response.data.token)
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (e) {
        dispatch({ type: 'add_error', payload: e.response.data.error })
    }
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

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, tryLocalSignin, clearErrorMessage },
    { token: null, })