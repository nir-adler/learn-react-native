import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = () => {
    const { state: { errorMessage }, signup, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up to Tracker'
                submitButtonText='Sign Up'
                errorMessage={errorMessage}
                onSubmit={signup}
            />
            <NavLink
                routeName='Signin'
                linkText='Already have account? Click to Sign In.'
            />
        </View>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignupScreen