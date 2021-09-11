import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'



const SearchBar = ({ term, setTerm, onEndEditing }) => {
    return (
        <View style={styles.box}>
            <Feather name="search" size={40} color="black" />
            <TextInput
                value={term}
                onChangeText={setTerm}
                style={styles.input}
                onEndEditing={onEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        paddingLeft: 5

    },
    input: {
        marginLeft: 10,
        fontSize: 18,
    }
})

export default SearchBar