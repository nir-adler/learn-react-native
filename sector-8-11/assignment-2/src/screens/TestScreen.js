import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TestScreen = () => {
    return (
        <View style={styles.box}>
            <View style={styles.box_1} />
            <View style={styles.box_2} />
            <View style={styles.box_3} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        // justifyContent: 'center',
        // flex:1,
        flexDirection: 'row',
    },
    box_1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        // alignSelf:'flex-end'
    },
    box_2: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    box_3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
})

export default TestScreen