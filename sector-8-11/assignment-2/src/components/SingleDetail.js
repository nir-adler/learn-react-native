import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Dimensions } from 'react-native'

const SingleDetail = ({ name, picture, rating, reviews }) => {
    // console.log(picture)
    return (
        <View style={styles.box}>
            <Image
                source={{
                    uri: picture,
                }}
                style={styles.image}
            />
            <Text style={styles.title}>{name.slice(0, 10)}</Text>
            <Text>{rating}  {reviews}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
      
        paddingVertical: 10,
        paddingRight: 10,
        marginLeft:15,
    
    
    },
    title:{
        marginTop:5,
        // fontSize:1,
        fontWeight: 'bold'
    },
    image:{
        width: Dimensions.get('window').width * 0.7,
        height:150
    }
})


export default SingleDetail