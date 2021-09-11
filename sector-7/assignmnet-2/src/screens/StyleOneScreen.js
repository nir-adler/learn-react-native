import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const StyleOneScreen = () => {
    return (
        <View style={styles.parentBox}>
            <View  style={styles.boxOne}/>
            <View  style={styles.boxTwo}/>
            <View  style={styles.boxThree}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentBox: {
        // height: 200,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'gray'

    },
    boxOne: {
        height: 100,
        width: 100,
        backgroundColor: 'orange'

    },
    boxTwo: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop:100
    },
    boxThree: {
        height: 100,
        width: 100,
        backgroundColor: 'pink'
    },
})


export default StyleOneScreen