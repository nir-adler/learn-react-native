import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                linkText='Dont have account? Go back to sign up'
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