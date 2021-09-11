import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import { useFocusEffect } from '@react-navigation/native'

const SignupScreen = () => {
    const { state: { errorMessage }, signUp, clearErrorMessage } = React.useContext(AuthContext)


    useFocusEffect(React.useCallback(() => {
        clearErrorMessage()
    }, []))

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign Up for Tracker'
                submitText='Sign Up'
                errorMessage={errorMessage}
                onSubmit={signUp}
            />
            <NavLink
                linkText='Already have account? Click to Sign In.'
                routeName='Signin'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignupScreen