import React, { useState } from 'react'
import {  StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'


const AuthForm = ({headerText,errorMessage,onSubmit,submitBottonText}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ?
                <Spacer>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </Spacer>
                : null}

            <Spacer>
                <Button
                    title={submitBottonText}
                onPress={() => onSubmit({ email, password })}
                />
            </Spacer>


        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
})

export default AuthForm