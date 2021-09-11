import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import {  AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Button
                title='Sign Out'
                onPress={signOut}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})

export default AccountScreen