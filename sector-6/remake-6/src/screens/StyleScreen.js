import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StyleScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'pink',
        flex:2
    },
    box2: {
        // width: 100,
        // height: 100,
        backgroundColor: 'yellow',
        flex:1,
        // alignSelf:'flex-start',
        position: 'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        flex:1
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'center',
        flex:1,
        // backgroundColor: 'yellow'
    }
})


export default StyleScreen