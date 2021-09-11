import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const myName='Nir Adler'

    return (
        <View>
            <Text style={styles.h1}>Getting started with React Native</Text>
           <Text style={styles.myName}>My name is:{myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myName: {
        fontSize: 20
    },
    h1:{
        fontSize:45
    }
})

export default ComponentsScreen
