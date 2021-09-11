import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'

const SingleDetail = ({ item }) => {
    return (
        <View style={styles.box}>
            <Image
                source={{
                    uri: item.image_url
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6',
        marginLeft: 15,
        paddingBottom: 5
    },
    image: {
        width: Dimensions.get('window').width * 0.5,
        height: (Dimensions.get('window').width * 0.5) * 0.66
    },
    name: {
        // fontSize:18,
        fontWeight: 'bold',
        marginTop: 5
    }
})

export default SingleDetail