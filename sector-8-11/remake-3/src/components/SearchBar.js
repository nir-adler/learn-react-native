import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, setTerm, submitSearch }) => {
    return (
        <View style={styles.box}>
            <Feather name="search" style={styles.icon} color="black" />
            <TextInput
                autoCapitalize='none'
                autoCurrent={false}
                value={term}
                onChangeText={setTerm}
                onEndEditing={submitSearch}
                style={styles.input}
                spellCheck={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        marginHorizontal:15,
        marginTop:15,
        borderRadius:5
    },
    input:{
        fontSize:18,
    },
    icon:{
        fontSize:35,
        padding:5
    }
})

export default SearchBar
