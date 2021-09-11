import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
    const {signOut}=React.useContext(AuthContext)

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