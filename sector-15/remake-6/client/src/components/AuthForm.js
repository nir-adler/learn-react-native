import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { Text, Input, Button } from 'react-native-elements'




const AuthForm = ({ headerText, submitBottonText, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input
                label='email'
                autoCapital='none'
                autoCurrent={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                autoCapital='none'
                autoCurrent={false}
                label='password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}

            />
            {errorMessage ? <Spacer><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
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
    errorMessage:{
        color:'red'
    }
})

export default AuthForm