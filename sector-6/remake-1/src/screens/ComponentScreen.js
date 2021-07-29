import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const ComponentScreen=()=>{
    const name='Nir Adler'
  
    return (
      <View>
        <Text style={styles.h1}>Geting started with React Native!</Text>
        <Text style={styles.name}>My name is:{name}</Text>
      </View>
    )
}

const styles=StyleSheet.create({
    h1:{
        fontSize:45
    },
    name:{
        fontSize:20
    }
})



export default ComponentScreen