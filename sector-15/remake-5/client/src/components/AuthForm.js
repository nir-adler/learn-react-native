import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'




const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtomText }) => {
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
            {errorMessage ? <Spacer><Text style={styles.error}>{errorMessage}</Text></Spacer> : null}
            <Spacer>
                <Button
                    title={submitButtomText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})

export default AuthForm