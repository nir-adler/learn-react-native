import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
    const { signin, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                submitBottomText='Sign Up'
                onSubmit={signin}
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
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen