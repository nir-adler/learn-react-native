import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'


const ImageDetail=({title,file})=>{
    return (
        <View>
            <Image 
                source={file}
                style={{
                    width:100,
                    height:100
                }}
            />
            <Text>{title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({})


export default ImageDetail