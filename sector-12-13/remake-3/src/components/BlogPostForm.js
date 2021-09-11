import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'


const BlogPostForm = ({ submit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
        <View style={styles.box}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCurrent={false}
                value={title}
                onChangeText={(value) => setTitle(value)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCurrent={false}
                value={content}
                onChangeText={(value) => setContent(value)}
            />
            <Button
                title='Save'
                onPress={() => submit(title, content)}
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
    box: {
        paddingHorizontal: 10
    },
    input: {
        borderWidth: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    }

})

export default BlogPostForm