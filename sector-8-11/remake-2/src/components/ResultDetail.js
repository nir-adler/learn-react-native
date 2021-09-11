import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'

const ResultDetail = ({ item }) => {

    return (
        <View style={styles.box}>
            <Image
                source={{
                    uri: item.image_url
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: (Dimensions.get('window').width * 0.7 ) * 0.66,
    },
    box:{
        marginLeft:15 ,
        paddingBottom:5,
    },
    name:{
        fontSize:15,
        marginBottom:3,
        marginTop:10,
        fontWeight:'bold'
    },
    info:{
        color:'#a6a6a6'
    }
})

export default ResultDetail