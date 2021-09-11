import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StyleScreen = () => {
    return(
        <View style={styles.box}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        // backgroundColor:'pink'
        
    },
    box1:{
        width:100,
        height:100,
        backgroundColor:'red',
        // alignItems:'flex-start'
        alignSelf:'flex-end'
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:'green'
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:'blue'
    }
})

export default StyleScreen