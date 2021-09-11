import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';



const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blog = state.find((blog) => blog.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blog.title}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
                >
                    <FontAwesome name="pencil" size={35} color="black" />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({})

export default ShowScreen