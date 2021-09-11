import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'



const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))
    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)

    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
            />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            {/* <Button
                title='Add Blog Post'
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index')
                    })
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5

    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5

    }
})

export default EditScreen