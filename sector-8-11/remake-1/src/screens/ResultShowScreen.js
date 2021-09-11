import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'
import yelp from '../api/yelp'
import { Dimensions } from 'react-native'


const ResultShowScreen = ({ navigation }) => {
    const [error, setError] = useState()
    const [images, setImages] = useState()
    const resultId = navigation.getParam('resultId')

    const getImagesApi = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setError()
            setImages(response.data.photos)
        } catch (e) {
            console.log(e)
            setError(e.toString())
        }
    }

    useEffect(() => {
        getImagesApi(resultId)
    }, [])

    if (!images && !error) {
        return null
    } else {
        return (
            <View>
                {error?<Text>{error}</Text>:null}
      
                <FlatList
                    data={images}
                    keyExtractor={(url) => url}
                    renderItem={({ item }) => <Image
                        source={{
                            uri: item
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
        width:Dimensions.get('window').width*0.7,
        height:(Dimensions.get('window').width*0.7)*0.66,
        marginTop:15,
        marginLeft:15
    }
})

export default ResultShowScreen