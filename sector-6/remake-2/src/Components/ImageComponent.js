import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageComponent = ({ file, name }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Image
                source={file}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageComponent