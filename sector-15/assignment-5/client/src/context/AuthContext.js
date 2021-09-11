import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_token':
            return { ...state, token: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return { ...state, token: action.payload }
        default:
            return state
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', {
            password,
            email
        })
        await AsyncStorage.setItem('token',
            response.data.token
        )

        dispatch({
            type: 'signup',
            payload: response.data.token
        })
        navigate('TrackList')
    } catch (e) {
        console.log(e.response.data)
        dispatch({
            type: 'add_error',
            payload: 'Somting went worng with signup'
        })
    }
}



export const { Context, Provider } = createDataContext(
    authReducer,
    { signup },
    {
        errorMessage: '',
        token: null,
    })