import React, { useContext, useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'



const AuthForm = ({ headerText, submitButtonText, errorMessage, onSubmit }) => {
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
                autoCapital='none'
                autoCurrent={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label='Password'
                autoCapital='none'
                autoCurrent={false}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
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
    errorMessage: {
        color: 'red'
    }
})

export default AuthForm