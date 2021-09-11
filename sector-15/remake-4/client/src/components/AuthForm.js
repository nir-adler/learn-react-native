import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headerText, submitButtonText, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            {errorMessage ? <Spacer><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage:{
        color:'red'
    }
})

export default AuthForm