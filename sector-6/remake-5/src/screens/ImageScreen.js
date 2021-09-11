import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const images = [
        { file: require('../../assets/beach.jpg'), title: 'beach' },
        { file: require('../../assets/forest.jpg'), title: 'forest' },
        { file: require('../../assets/mountain.jpg'), title: 'mountain' },
    ]


    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={(item) => item.file.toString()}
                renderItem={({ item }) => <ImageDetail file={item.file} title={item.title} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen