import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const data = [
        {
            file: require('../../assets/beach.jpg'),
            name: 'beach'
        },
        {
            file: require('../../assets/forest.jpg'),
            name: 'forest'
        },
        {
            file: require('../../assets/mountain.jpg'),
            name: 'mountain'
        },

    ]

    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item.file.toString()}
            renderItem={({item})=><ImageDetail file={item.file} name={item.name} />}
        />
    )
}

const styles = StyleSheet.create({})

export default ImageScreen