import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return <>
        <Text>account screen</Text>
        <Spacer>
            <Button
                title='Sign Out'
            // onPress={ }
            />
        </Spacer>
    </>


}

const styles = StyleSheet.create({})

export default AccountScreen