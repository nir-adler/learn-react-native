import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView
            forceInset={{ top: 'always' }}
            style={styles.container}
        >
            <Text>account screen</Text>
            <Button
                title='Sing Out'
                onPress={signout}
            />
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container:{
        // borderWidth:30,
        // borderColor: 'blue'
        marginTop:35
    }
})


export default AccountScreen