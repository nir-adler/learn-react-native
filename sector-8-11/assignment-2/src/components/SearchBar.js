import { Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native'
import { Feather } from '@expo/vector-icons'




const SearchBar = ({ changeText, value, onTermSubmit }) => {
    // const [input, setInput] = useState('Search')
    return (<View style={styles.backgroundStyle}>
        {/* <Image
            source={require('../../assets/loupe.png')}
            style={styles.icon}
        /> */}
        <Feather
            name='search'
            style={styles.icon}

        />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Search'
            style={styles.textInput}
            onChangeText={changeText}
            value={value}
            onEndEditing={onTermSubmit}

        />

    </View>)
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between'
        // backgroundColor: '#fff',
        backgroundColor: '#f0f0f5',
       
        // paddingHorizontal: 10,
        // paddingVertical: 15,
        borderRadius: 5,
        height: 50,
        // flex:1,
        marginBottom:10
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    },
    textInput: {
        // marginLeft: 25,
        // borderWidth: 1,
        // flex: 1,
        fontSize: 18,
        // backgroundColor: '#f0f0f5',
    }
})

export default SearchBar