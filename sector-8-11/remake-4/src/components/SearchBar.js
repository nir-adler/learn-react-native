import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, setTerm, onSubmit }) => {
    return (
        <View style={styles.box}>
            <Feather name="search" style={styles.searchIcon} color="black" />
            <TextInput
                autoCapitalize="none"
                autoCurrent={false}
                style={styles.input}
                value={term}
                onChangeText={setTerm}
                onEndEditing={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        borderRadius: 5
    },
    searchIcon: {
        fontSize: 35,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    input: {
        marginLeft: 10
    }

})

export default SearchBar