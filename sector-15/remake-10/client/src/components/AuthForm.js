import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, submitText, errorMessage, onSubmit }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <>
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input
                value={email}
                onChangeText={setEmail}
                label='Email'
                autoCapital='none'
                autoCurrent={false}
            />
            <Input
                value={password}
                onChangeText={setPassword}
                label='Password'
                autoCapital='none'
                autoCurrent={false}
                secureTextEntry
            />
            {errorMessage ? <Spacer><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
            <Spacer>
                <Button
                    title={submitText}
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