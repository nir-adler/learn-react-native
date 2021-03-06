import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from '../components/Spacer'
import { useNavigation } from '@react-navigation/native'

const NavLink = ({ linkText, routeName }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
        >
            <Spacer>
                <Text style={styles.link}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default NavLink