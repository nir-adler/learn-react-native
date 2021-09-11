import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SigninScreen = () => {
    const { state: { errorMessage }, signin, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In for Tracker'
                submitBottonText='Sign In'
                onSubmit={signin}
                errorMessage={errorMessage}
            />
            <NavLink
                linkText='Dont have account? Click to Sign Up.'
                routeName='Signup'
            />
        </View>
    )
}

SigninScreen.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 250,
        justifyContent: 'center'
    }
})

export default SigninScreen