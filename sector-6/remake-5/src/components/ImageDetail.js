import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ file, title }) => {
    return(
        <>
            <Image 
                source={file}

            />
            <Text>{title}</Text>
        </>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail