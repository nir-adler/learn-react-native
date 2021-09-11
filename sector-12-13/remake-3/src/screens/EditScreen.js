import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext)
    const id = navigation.getParam('id')
    const blog = state.find((blogPost) => blogPost.id === id)
    return (
        <View>
            <BlogPostForm
                submit={(title, content) => editBlogPost(id, title, content, () => {
                    navigation.navigate('Index')
                })}
                initialValues={{
                    title: blog.title,
                    content: blog.content
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen