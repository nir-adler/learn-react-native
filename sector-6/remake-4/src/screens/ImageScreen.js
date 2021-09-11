import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen=()=>{
    return (
        <View>
            <ImageDetail 
                title='beach'
                file={require('../../assets/beach.jpg')}
            />
            <ImageDetail 
                title='forest'
                file={require('../../assets/forest.jpg')}
            />
            <ImageDetail 
                title='mountain'
                file={require('../../assets/mountain.jpg')}
            />
        </View>
    )
}

const styles=StyleSheet.create({})

export default ImageScreen