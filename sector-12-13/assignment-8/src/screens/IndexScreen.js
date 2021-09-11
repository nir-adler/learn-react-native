import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather, FontAwesome } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(BlogContext)

    useEffect(() => {
        getBlogPosts()
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })
        return () => {
            listener.remove()
        }
    }, [])
    return (
        <View>
            <Button
                title='Add Blog post'
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}
                        >

                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather name="trash-2" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity
            onPress={() => navigation.navigate('Create')}
        >
            <Feather name="plus" style={styles.plus} color="black" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 18
    },
    plus: {
        marginRight: 10,
        fontSize: 30
    }
})

export default IndexScreen