import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(BlogContext)



    return (
        <View style={styles.box}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(title) => setTitle(title)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(title) => setContent(title)}
                style={styles.input}
            />
            <Button
                title='Create'
                onPress={() => addBlogPost(title, content, () => {
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

export default CreateScreen