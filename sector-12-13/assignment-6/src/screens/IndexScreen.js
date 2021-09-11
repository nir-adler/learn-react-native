import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {
                                id: item.id
                            })}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text>{item.id}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather name="trash" style={styles.icon} color="black" />
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
        headerRight: () => {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Create')}
                >
                    <Feather name="plus" size={30} color="black" />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopWidth: 1,
        // borderBottomWidth:1,
        borderColor: 'gray'
    },
    icon: {
        fontSize: 24
    },
    title: {
        fontSize: 18
    },
    plus: {
        // marginRight:10
    }
})

export default IndexScreen