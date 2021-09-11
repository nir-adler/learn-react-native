import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { ...state, token: action.payload }
        case 'clean_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { ...state, token: null }
        default:
            return state
    }


}

const tryLocalSignin = (dispatch) => async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({ type: 'signin', payload: token })
            navigate('mainFlow')
        } else {
            navigate('Signup')
        }
    } catch (e) {
        console.log(e)
    }
}

const cleanErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clean_error_message' })
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('mainFlow')
    } catch (e) {
        console.log(e.response.data.error)
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
        navigate('mainFlow')
    } catch (e) {
        console.log(e.response.data.error)
        dispatch({ type: 'add_error', payload: e.response.data.error })
    }
}

const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'signout' })
        navigate('authFlow')
    } catch (e) {
        console.log(e)
    }

}







export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signup,
        cleanErrorMessage,
        signin,
        tryLocalSignin,
        signout
    },
    { token: null, errorMessage: '' })