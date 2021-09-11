import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Foundation } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const {state} = useContext(BlogContext)
    const id=navigation.getParam('id')
    const blog=state.find((blogPost)=>blogPost.id===id)

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
            <Foundation name="pencil" style={styles.pencilIcon} color="black" />
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    pencilIcon: {
        marginRight: 10,
        fontSize: 30
    },
    box:{
        marginHorizontal:50,
        marginVertical:20
    },
    title:{
        fontWeight:'bold',
        marginBottom:10
    }
})

export default ShowScreen