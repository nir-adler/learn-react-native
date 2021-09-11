import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const ImageDetail = ({file,name}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Image
                source={file}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail