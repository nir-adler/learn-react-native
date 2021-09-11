import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'




const AuthForm = ({ headerText, submitBottomText, onSubmit }) => {
    const { state: { errorMessage } } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

    return (
        <>
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input
                autoCapital='none'
                auoCurrent={false}
                value={email}
                onChangeText={setEmail}
                label='Email'
            />
            <Input
                autoCapital='none'
                auoCurrent={false}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                label='Password'
            />

            {errorMessage ? <Spacer><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
            <Spacer >
                <Button
                    title={submitBottomText}
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