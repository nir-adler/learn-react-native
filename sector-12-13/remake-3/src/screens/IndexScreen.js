import React, { useContext,useEffect} from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost,getBlogPosts } = useContext(BlogContext)

    useEffect(()=>{
        getBlogPosts()
        const event=navigation.addListener('didFocus',()=>{
            getBlogPosts() 
        })
        return ()=>{
            event.remove()
        }
    },[])

    return (
        <View style={styles.box}>
            <Button
                title='Add blog post'
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TouchableOpacity
                    onPress={() => navigation.navigate('Show', { id: item.id })}
                >
                    <View style={styles.row}>
                        <Text>{item.title}</Text>
                        <TouchableOpacity
                            onPress={() => deleteBlogPost(item.id)}
                        >
                            <Feather name="trash-2" style={styles.trashIcon} color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                }
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity
            onPress={() => navigation.navigate('Create')}
        >
            <Feather name="plus" style={styles.plusIcon} color="black" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1
    },
    row: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    trashIcon: {
        fontSize: 25
    },
    plusIcon: {
        fontSize: 35,
        marginRight: 10
    }
})

export default IndexScreen