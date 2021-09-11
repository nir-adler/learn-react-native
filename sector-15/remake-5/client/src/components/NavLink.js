import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import Spacer from '../components/Spacer'

const NavLink = ({ navigation, linkText, routeName }) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
            >
                <Spacer>
                    <Text style={styles.linkText}>{linkText}</Text>
                </Spacer>

            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    linkText:{
        color:'blue'
    }
})

export default withNavigation(NavLink)