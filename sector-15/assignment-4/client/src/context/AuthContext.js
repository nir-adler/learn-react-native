import createDataContext from './createDataContext'
import tracker from '../api/tracker'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'error':
            
        default:
            return state
    }


}


const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            // console.log(email, password)
            const response = await tracker.post('/signup', {
                email,
                password
            })
            console.log(response)
        } catch (e) {
            console.log(e.response.data)
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {

        } catch (e) {

        }
    }
}

const signout = (dispatch) => {
    return async () => {
        try {

        } catch (e) {

        }
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
)
