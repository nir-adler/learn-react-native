import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, routeName, linkText }) => {
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
    linkText: {
        color: 'blue'
    }
})

export default withNavigation(NavLink)