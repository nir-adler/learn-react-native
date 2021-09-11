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
                headerText='Sign In to Tracker'
                submitButtonText='Sign In'
                errorMessage={errorMessage}
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                linkText='Dont have account? Click to Sign Up.'
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
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen