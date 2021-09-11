import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    // console.log(onSubmit)
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
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
                title='Save Blog Post'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm