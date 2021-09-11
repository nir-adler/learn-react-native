import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(BlogContext)
    const blog = state.find((blogPost) => blogPost.id === id)
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{blog.title}</Text>
            <Text>{blog.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity
        onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}
        >
            <FontAwesome name="pencil" style={styles.pencilIcon} color="black" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    pencilIcon:{
        fontSize:30,
        marginRight:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    box: {
        marginHorizontal: 10,
        marginTop: 30,
        paddingVertical: 40,
        borderWidth: 1,
        paddingHorizontal: 5
    }
})

export default ShowScreen