import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtomText='Sign Up'
            />
            <NavLink
                linkText='Already have account, click to Sign In'
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