import React, { useContext, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Spacer from '../components/Spacer'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const SignupScreen = () => {
    const { state: { errorMessage }, signUp,clearErrorMessage } = useContext(AuthContext)

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage()
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
       
            <AuthForm
                headerText='Sign Up for Tracker'
                submitTitle='Sign Up'
                onSubmit={signUp}
                errorMessage={errorMessage}
            />
            <NavLink
                linkText='Already have account? Click for Sing In.'
                routeName='Signin'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        marginTop:50
    }
})

export default SignupScreen