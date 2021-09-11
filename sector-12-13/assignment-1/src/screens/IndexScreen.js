import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)
    console.log(blogPosts)
    return (
        <View>
            <Text>index screen</Text>
            <FlatList
            data={blogPosts}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=><Text>{item.name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen