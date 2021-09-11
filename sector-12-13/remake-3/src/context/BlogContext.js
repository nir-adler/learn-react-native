import createDataContext from './createDataContext'
import serverJson from '../api/serverJson'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return { id: action.payload.id, title: action.payload.title, content: action.payload.content }
                } else {
                    return blogPost
                }
            })
        case 'add_blogposts':
            return action.payload
        default:
            return state
    }

}

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await serverJson.get('/blogposts')
            dispatch({ type: 'add_blogposts', payload: response.data })

        } catch (e) {
            consoel.log(e)
        }
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        // dispatch({ type: 'edit_blogpost', payload: { id, title, content } })

        try {
            await serverJson.put(`/blogposts/${id}`, {
                title, content
            })
            if (callback) {
                callback()
            }

        } catch (e) {
            console.log(e.message)
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async(id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
        try{
            await serverJson.delete(`/blogposts/${id}`)
        }catch(e){
            console.log(e.message)
        }
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        try {
            await serverJson.post('/blogposts', {
                title,
                content
            })
            if (callback) {
                callback()
            }
        } catch (e) {
            console.log(e)
        }

        // dispatch({ type: 'add_blogpost', payload: { title, content } })
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts
    },
    [])