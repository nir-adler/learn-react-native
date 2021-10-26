import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const data = [
        { name: 'Forest', file: require('../../assets/forest.jpg') },
        { name: 'Beach', file: require('../../assets/beach.jpg') },
        { name: 'Mountain', file: require('../../assets/mountain.jpg') },
    ]

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.file.toString()}
                renderItem={({ item }) => <ImageDetail text={item.name} file={item.file} />}
            />
        </View>
    )
}



const styleSheet = StyleSheet.create({})


export default ImageScreen