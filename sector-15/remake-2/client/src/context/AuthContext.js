import createDataContext from './createDataContext'
import trackerApi from '../api/trackerApi'

const authReducer = (state, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const signup = (dispatch) => {
    return async (email, password) => {
        try {
            const response = await trackerApi.post('/signup', {
                password, email
            })
            console.log(response.data)
        } catch (e) {
            console.log(e.response.data)
        }
    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signup },
    { isSignedIn: false })