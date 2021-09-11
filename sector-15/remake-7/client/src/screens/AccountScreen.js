import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <Button
                title='Sign Out'
                onPress={signout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
})

export default AccountScreen