import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'


const ImageDetail=({fileNumber,name,score})=>{
    // console.log(props)
    return (
        <View>
            <Image 
                source={fileNumber}
            />
            <Text>{name}</Text>
            <Text>image score - {score}</Text>
        </View>
    )
}


const styles=StyleSheet.create({})


export default ImageDetail