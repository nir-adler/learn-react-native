import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, EditBlogPost } = useContext(BlogContext)
    const post = state.find((blogPost) => blogPost.id === id)
    // console.log(post)

    return <BlogPostForm
        onSubmit={(title,content)=>EditBlogPost(id,title,content,()=>{
            navigation.navigate('Index')
        })}
        initialValues={{
            title: post.title,
            content: post.content
        }}
    />
}

const styles = StyleSheet.create({})


export default EditScreen