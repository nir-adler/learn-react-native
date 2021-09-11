import React, { useReducer } from 'react'
import createDataContext from './createDataContext'
import serverApi from '../api/jsonServerApi'


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 9999) }]
        case 'get_blogposts':
            return action.payload
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        title: action.payload.title,
                        content: action.payload.content
                    }
                } else {
                    return blogPost
                }
            })
        default:
            return state
    }

}

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await serverApi.get('/blogposts')
            dispatch({ type: 'get_blogposts', payload: response.data })
        } catch (e) {

        }
    }
}

const addBlogPost = (dispatch) => {
    // return (title, content, callback) => {
    //     dispatch({ type: 'add_blogpost', payload: { title, content } })
    //     if (callback) {
    //         callback()
    //     }

    // }
    return async (title, content, callback) => {
        try {
            const response = await serverApi.post('/blogposts', {
                title,
                content
            })
            if (callback) {
                callback()
            }
        } catch (e) {

        }
    }
}

const EditBlogPost = (dispatch) => {

     return  async(id, title, content, callback) => {
        
        try{
            await serverApi.put(`/blogposts/${id}`,{
                title,
                content
            })
            if(callback){
                callback()
            }
        }catch(e){

        }
    }
}

const deleteBlogPost = (dispatch) => {

    return async (id) => {
        try{
            await serverApi.delete(`/blogposts/${id}`)
            dispatch({ type: 'delete_blogpost', payload: id })
        }catch(e){

        }
    }
}



export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, EditBlogPost, getBlogPosts },
    []
)