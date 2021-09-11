import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SigninScreen = () => {
    const { state, signin, cleanErrorMessage } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={cleanErrorMessage}
            />
            <AuthForm
                headerText='Sign In for Tracker'
                submitButtonText='Sign In'
                onSubmit={signin}
                errorMessage={state.errorMessage}
            />
            <NavLink
                linkText='Dont have account? Go back to Sign up.'
                routeName='Signup'
            />
        </View>
    )
}



SigninScreen.navigationOptions = {
    headerShown: false,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen