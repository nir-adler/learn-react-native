import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

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

const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'signin', payload: null })
        navigate('authFlow')
    } catch (e) {
        console.log(e)
    }
}

const localSignin = (dispatch) => async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({ type: 'signin', payload: token })
            navigate('mainFlow')
        } else {
            navigate('authFlow')
        }
    } catch (e) {
        console.log(e)
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (e) {
        // console.log(e.response.data)
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
        // console.log(e.response.data)
        dispatch({ type: 'add_error', payload: e.response.data.error })
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, clearErrorMessage, signout, signin, localSignin },
    { errorMessage: '', token: null }
)