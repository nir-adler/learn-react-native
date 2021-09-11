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
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signin', payload: null })
    navigate('authFlow')
}

const tryLocalSignin = (dispatch) => async () => {
    try {   
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({ type: 'signin', payload: token })
            navigate('TrackList')
        }else{
            navigate('Signup')
        }
    } catch (e) {

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
        navigate('mainFlow')
    } catch (e) {
        console.log(e.response.data)
        dispatch({ type: 'add_error', payload: 'Somting went worng with signup' })
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
        console.log(e.response.data)
        dispatch({ type: 'add_error', payload: 'Somting went worng with signup' })
    }
}



export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signup,
        signin,
        clearErrorMessage,
        tryLocalSignin,
        signout,
        
    },
    {
        errorMessage: '',
        token: null
    })