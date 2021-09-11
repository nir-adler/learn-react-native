import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })
        return () => {
            listener.remove()
        }
    }, [])
    if (!state) {
        return null
    } else {
        return (
            <View style={styles.box}>

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
                                        <Feather name="trash" style={styles.trashIcon} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return <TouchableOpacity
                onPress={() => navigation.navigate('Create')}
            >
                <Feather name="plus" style={styles.plusIcon} color="black" />
            </TouchableOpacity>
        }
    }
}

const styles = StyleSheet.create({
    plusIcon: {
        fontSize: 30,
        marginRight: 5
    },
    box: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5
        // marginBottom:15
    },
    trashIcon: {
        fontSize: 30
    },
    title: {
        alignSelf: 'center',
        fontSize: 18
    }
})

export default IndexScreen