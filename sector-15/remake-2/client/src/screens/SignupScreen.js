import React, { useState,useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup}=useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapital='none'
                autoCorrect={false}
                />
            <Spacer />
            <Input
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapital='none'
                secureTextEntry
                autoCorrect={false}
            />
            <Spacer>
                <Button
                    title='Sign Up'
                    onPress={()=>signup(email,password)}
                />
            </Spacer>

        </View>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen