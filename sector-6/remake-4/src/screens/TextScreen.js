import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('Enter name')
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput
                autoCapitalize='none'
                autoCurrent={false}
                style={styles.input}
                value={name}
                onChangeText={(value) => setName(value)}

            />
            <Text>Your name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin:15
    }

})

export default TextScreen