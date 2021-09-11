import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)

    return <BlogPostForm 
        submit={(title,content)=>addBlogPost(title,content,()=>{
            navigation.pop()
        })}
    />
}

const styles = StyleSheet.create({

})

export default CreateScreen