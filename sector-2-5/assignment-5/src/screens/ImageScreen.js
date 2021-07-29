import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetil from '../components/ImageDetail'


const ImageScreen = () => {
    const images = []


    return <View>
        <ImageDetil title="Forest" score={9} imageSource={require('../../assets/forest.jpg')} />
        <ImageDetil title="Beach" score={7} imageSource={require('../../assets/beach.jpg')} />
        <ImageDetil title="Mountain" score={4} imageSource={require('../../assets/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({

})



export default ImageScreen