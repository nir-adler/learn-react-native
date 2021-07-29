import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
    const data = [
        {
            fileNumber: require('../../assets/beach.jpg'),
            name: 'beach',
            score: 9
        },
        {
            fileNumber: require('../../assets/forest.jpg'),
            name: 'forest',
            score: 5
        }, {
            fileNumber: require('../../assets/mountain.jpg'),
            name: 'mountain',
            score: 6
        },
    ]


    return <FlatList
        data={data}
        keyExtractor={(item) => item.fileNumber}
        renderItem={({ item }) => {
            return <ImageDetail
                fileNumber={item.fileNumber}
                name={item.name}
                score={item.score}

            />
        }}
    />
}


const styles = StyleSheet.create({})



export default ImageScreen