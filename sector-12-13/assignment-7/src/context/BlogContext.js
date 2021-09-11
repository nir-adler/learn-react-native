import createContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'add_blogpost':
            return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 9999) }]
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost

            })
        // [...state.filter((blogPost) => blogPost.id !== action.payload.id), { title: action.payload.title, content: action.payload.content, id: action.payload.id }]
        default:
            return state
    }
}


const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } })
        if (callback) {
            callback()
        }
    }
}
const editBlogPost = (dispatch) => {
    return (title, content, id, callback) => {
        dispatch({
            type: 'edit_blogpost',
            payload: { title, content, id }
        })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = createContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost

    },
    [{ title: 'hello', content: 'world', id: '1' }]
)

