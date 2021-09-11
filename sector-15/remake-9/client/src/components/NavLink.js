import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from './Spacer'
import { useNavigation } from '@react-navigation/native'

const NavLink = ({ linkText, routeName }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
        >
            <Spacer>
                <Text style={styles.linkText}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
    linkText: {
        color: 'blue'
    }
})

export default NavLink