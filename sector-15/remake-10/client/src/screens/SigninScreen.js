import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import { useFocusEffect } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const SigninScreen=()=>{
    const { state: { errorMessage }, signIn, clearErrorMessage } = React.useContext(AuthContext)


    useFocusEffect(React.useCallback(() => {
        clearErrorMessage()
    }, []))

    return (
        <SafeAreaView style={styles.container}>
            <AuthForm
                headerText='Sign In for Tracker'
                submitText='Sign In'
                errorMessage={errorMessage}
                onSubmit={signIn}
            />
            <NavLink
                linkText='Dont have account? Click to Sign Up.'
                routeName='Signup'
            />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen