import createContext from './createDataContext'
import JsonServer from '../api/jsonServer'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost

            })
        case 'get_blogposts':
            return action.payload
        // [...state.filter((blogPost) => blogPost.id !== action.payload.id), { title: action.payload.title, content: action.payload.content, id: action.payload.id }]
        default:
            return state
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await JsonServer.get('/blogposts')
            // console.log(response.data)
            dispatch({ type: 'get_blogposts', payload: response.data })
        } catch (e) {
            console.log(e)
        }
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        try {
            await jsonServer.post('/blogposts', { title, content })
            if (callback) {
                callback()
            }
        } catch (e) {

        }
    }
}
const deleteBlogPost = (dispatch) => {
    console.log('here')
    return async (id) => {
        try {
            await jsonServer.delete(`/blogposts/${id}`)
            dispatch({ type: 'delete_blogpost', payload: id })
            if (callback) {
                callback()
            }
        } catch (e) {

        }
    }
}

const editBlogPost = (dispatch) => {
    return async(title, content, id, callback) => {

        try {
            await jsonServer.put(`/blogposts/${id}`,{title, content})
            // dispatch({ type: 'delete_blogpost', payload: id })
            if (callback) {
                callback()
            }
        } catch (e) {

        }
        // dispatch({
        //     type: 'edit_blogpost',
        //     payload: { title, content, id }
        // })
        // if (callback) {
        //     callback()
        // }
    }
}

export const { Context, Provider } = createContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts

    },
    []
)

