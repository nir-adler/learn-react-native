import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const { data, addPost } = useContext(BlogContext)
    // console.log(data)
    return (
        <View>
            <Button
                title='Add Post'
                onPress={addPost}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen