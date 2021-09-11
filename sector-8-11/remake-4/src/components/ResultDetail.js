import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { Dimensions } from 'react-native'

const ResultDetail = ({item}) => {
    return (
        <View style={styles.box}> 
            <Image 
            source={{
                uri:item.image_url
            }}
            style={styles.image}
            />
            <Text style={styles.placeName}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get('window').width*0.5,
        height:(Dimensions.get('window').width*0.5)*0.66  
    },
    box:{
        marginLeft:15
    },
    placeName:{
        marginTop:5,
        fontWeight:'bold'
    }
})

export default ResultDetail