import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(BlogContext)
    const blog = state.find((blogPost) => blogPost.id === id)
    return (
        <View>
            <Text>{blog.title}</Text>
        </View>
    )
}


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity
        onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}
        >
            <FontAwesome name="pencil" style={styles.pencil} color="black" />
        </TouchableOpacity>
    }
}


const styles = StyleSheet.create({
    pencil: {
        marginRight: 10,
        fontSize: 30
    }
})

export default ShowScreen