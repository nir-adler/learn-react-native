import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, onSubmit, submitButtonText, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer />

            <Input
                label='Email'
                autoCapitalize='none'
                autoCurrent={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label='Password'
                autoCapitalize='none'
                autoCurrent={false}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {errorMessage ? <Spacer><Text style={styles.error}>{errorMessage}</Text></Spacer> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({email, password})}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    error:{
        color:'red'
    }

})

export default AuthForm