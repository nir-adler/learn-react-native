import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { Dimensions } from 'react-native'

const ResultDetail=({item})=>{
    // console.log(item.image_url)
    return(
        <View style={styles.box}>
            <Image 
                source={{
                    uri:item.image_url
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    box:{
        marginLeft:15,
        // borderBottomWidth:1
    },
    name:{
        fontWeight:'bold',
        fontSize:15
    },
    image:{
        width:Dimensions.get('window').width*0.5,
        height:(Dimensions.get('window').width*0.5)*0.66

    }
})

export default ResultDetail