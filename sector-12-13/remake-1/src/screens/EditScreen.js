import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext)
    const blog = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)



    return (
        <View style={styles.box}>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput
                value={title}
                onChangeText={(title) => setTitle(title)}
                style={styles.input}
            />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput
                value={content}
                onChangeText={(title) => setContent(title)}
                style={styles.input}
            />
            <Button
                title='Save'
                onPress={() => editBlogPost(title, content, navigation.getParam('id'), () => {
                    navigation.navigate('Index')
                })}
            />
        </View>
    )
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