import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <View>
            <Text>account screen</Text>
            <Button
                title='Sign Out'
                onPress={signout}
            />
        </View>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
}


const styles = StyleSheet.create({})

export default AccountScreen