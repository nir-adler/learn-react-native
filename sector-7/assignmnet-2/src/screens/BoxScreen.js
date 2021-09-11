import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        // flexDirection: 'row',
        height: 200,

        // alignItems: 'center',
        // justifyContent: 'center'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',

    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        position:'absolute',
        top:0, 
        right:0,
        left:0,
        bottom:0
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
})


export default BoxScreen
