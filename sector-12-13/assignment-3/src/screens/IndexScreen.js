import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext)
    // console.log(value)
    return (
        <View>
            <Button
                title='Add Post'
                onPress={addBlogPost}
            />

            <FlatList
                data={state}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen