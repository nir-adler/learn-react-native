import React,{useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import {Context as AuthContext} from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SignupScreen = () => {
    const {state,signup,cleanErrorMessage}=useContext(AuthContext)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={cleanErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                submitButtonText='Sign Up'
                onSubmit={signup}
                errorMessage={state.errorMessage}
            />
            <NavLink
                linkText='Already have an account? Sign in instead.'
                routeName='Signin'
            />
        </View>
    )
}

SignupScreen.navigationOptions={
    headerShown:false,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignupScreen