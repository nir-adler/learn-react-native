import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'


const ImageDetail = ({ file, text }) => {
    console.log(Dimensions.get('window'))
    return (
        <View >
            <Image
                source={file}
                style={styles.image}
                // resizeMode={'repeat'}
            />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: (Dimensions.get('window').width * 0.4) * 0.66
    }
})

export default ImageDetail