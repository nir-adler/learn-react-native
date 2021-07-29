import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetil from '../components/ImageDetail'


const ImageScreen = () => {
    const images = []


    return <View>
        <ImageDetil title="Forest" imageScore={9} imageSource={require('../../assets/forest.jpg')} />
        <ImageDetil title="Beach" imageScore={7} imageSource={require('../../assets/beach.jpg')} />
        <ImageDetil title="Mountain" imageScore={4} imageSource={require('../../assets/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({

})



export default ImageScreen