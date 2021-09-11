import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Spacer from '../components/Spacer'

const NavLink = ({ linkText, routeName, navigation }) => {
    return (

        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
        >
            <Spacer>
                <Text style={styles.linkText}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    linkText: {
        color: 'blue'
    }
})


export default withNavigation(NavLink)