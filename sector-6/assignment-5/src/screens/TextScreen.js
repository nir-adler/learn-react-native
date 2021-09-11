import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('Enter name')
    const [password, setPassword] = useState('Password')

    return (
        <View>
            <Text>Enter name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCurrent={false}
                value={name}
                onChangeText={(newValue)=>setName(newValue)}
            />
            <Text>My name is {name}</Text>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCurrent={false}
                value={name}
                onChangeText={(newValue)=>setPassword(newValue)}
            />
            <Text>{password.length<5 ? 'Password must be longer then 5 characters' : null} Password must be longer then 5 characters</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

})


export default TextScreen