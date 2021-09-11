import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)

    return <BlogPostForm
        onSubmit={(title, content) => {
            addBlogPost(title,content,()=>navigation.navigate('Index'))
        }}

    />
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 15,
        marginBottom: 10

    },
    label: {
        fontSize: 18,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    box: {
        paddingTop: 10
    }

})

export default CreateScreen