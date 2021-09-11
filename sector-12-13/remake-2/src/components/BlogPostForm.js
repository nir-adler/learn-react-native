import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
        <View style={styles.box}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                autoCapitalize='none'
                autoCurrent={false}
                value={title}
                onChangeText={(value) => setTitle(value)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                autoCapitalize='none'
                autoCurrent={false}
                value={content}
                onChangeText={(value) => setContent(value)}
                style={styles.input}
            />
            <Button
                title='save'
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
        fontSize: 15,
        borderWidth: 1,
        marginHorizontal: 15,
        marginBottom: 10
    },
    box: {
        // flex:1,
        // backgroundColor:'#fff'
        paddingTop: 10
    },
    label: {
        fontSize: 18,
        marginLeft: 15
    }
})

export default BlogPostForm