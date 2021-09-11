import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet,FlatList } from 'react-native'
import yelp from '../api/yelp'
import { Dimensions } from 'react-native'

const DetailScreen = ({ navigation }) => {
    const [images, setImages] = useState()
    const [error, setError] = useState()
    const id = navigation.getParam('id')

    const getImagesApi = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setError()
            setImages(response.data.photos)
        } catch (e) {
            setError(e.toString())
        }
    }
   useEffect(()=>{
    getImagesApi(id)
   },[])
    if (!images) {
        return null
    } else {
        return (
            <View>
                {error ? <Text>{error}</Text> : null}
                <FlatList
                    data={images}
                    keyExtractor={(item)=>item}
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
        marginTop:15,
        marginLeft:15
    },
   

})

export default DetailScreen