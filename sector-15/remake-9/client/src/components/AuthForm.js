import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, submitTitle, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return <>
        <Spacer>
            <Text h2>{headerText}</Text>
        </Spacer>
        <Input

            label='Email'
            autoCurrent={false}
            autoCapital='none'
            value={email}
            onChangeText={setEmail}
        />

        <Input

            label='Password'
            autoCurrent={false}
            autoCapital='none'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        {errorMessage ? <Spacer><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
        <Spacer>
            <Button
                title={submitTitle}
                onPress={() => onSubmit({ email, password })}
            />

        </Spacer>
    </>
}


const styles = StyleSheet.create({
    errorMessage: {
        color: 'red'
    }
})

export default AuthForm