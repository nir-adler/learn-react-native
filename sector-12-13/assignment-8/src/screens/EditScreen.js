import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(BlogContext)
    const blog = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm
        onSubmit={(title, content) => editBlogPost(
            title,
            content, id,
            () => navigation.pop()
        )}
        initialValues={{
            title: blog.title,
            content: blog.content
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

export default EditScreen