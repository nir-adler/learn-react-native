import { NavigationEvents } from 'react-navigation'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

// const AuthForm = ({headerText,errorMessage,onSubmit,submitBottonText}) => {


const SigninScreen = () => {
    const { state, signin,clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
                // onDidFocuse={() => { }}
                // onWillBlur={clearErrorMessage}
                // onDidBlur={() => { }}
            />
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitBottonText='Sign In'

            />
            <NavLink
                textLink='Dont have account? Sign up instead'
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