import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SignupScreen = () => {
    const { state: { errorMessage }, signup, clearErrorMessage } = useContext(AuthContext)

    // console.log(signup)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                submitBottonText='Sign Up'
                onSubmit={signup}
                errorMessage={errorMessage}
            />
            <NavLink
                linkText='Already have account? Click to Sign In.'
                routeName='Signin'
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
        marginBottom: 250,
        justifyContent: 'center'
    }
})

export default SignupScreen