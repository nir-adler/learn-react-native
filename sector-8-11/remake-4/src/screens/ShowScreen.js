import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,FlatList,Image } from 'react-native'
import yelp from '../api/yelp'
import { Dimensions } from 'react-native'


const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [images, setImages] = useState()

    const imagesApi=async(id)=>{
        try{
            const response=await yelp.get(`/${id}`)
            setImages(response.data.photos)
        }catch(e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        imagesApi(id)
    },[])

    if (!images) {
        return null
    } else {
        return (
            <View>
                <FlatList
                    data={images}
                    keyExtractor={(image)=>image}
                    renderItem={({item})=><Image
                        source={{
                            uri:item
                        }}
                        style={styles.image}
                    />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    image:{
        width:Dimensions.get('window').width*0.5,
        height:(Dimensions.get('window').width*0.5)*0.66,
        marginVertical:10,
        marginLeft:15  
    },
})

export default ShowScreen