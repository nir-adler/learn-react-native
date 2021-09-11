import React from 'react'
import { Text, Button } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Spacer from '../components/Spacer'

const NavLink = ({ navigation, routeName, linkText }) => {
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate(routeName)}
        >
            <Spacer>
                <Text style={styles.linkText}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    linkText:{
        color:'blue'
    }
})

export default withNavigation(NavLink)