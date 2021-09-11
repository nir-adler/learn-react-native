import React, { useContext, useCallback,useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Spacer from '../components/Spacer'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const SigninScreen = () => {
    const { state: { errorMessage }, signIn, clearErrorMessage } = useContext(AuthContext)

  
    useFocusEffect(
        useCallback(() => {
            clearErrorMessage()
        }, [])
    );


    return (
        <SafeAreaView style={styles.container}>

            <AuthForm
                headerText='Sign In for Tracker'
                submitTitle='Sign In'
                onSubmit={signIn}
                errorMessage={errorMessage}
            />
            <NavLink
                linkText='Dont have account? Click to Sign Up.'
                routeName='Signup'
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

export default SigninScreen