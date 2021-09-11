import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
import { Dimensions } from 'react-native'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const [error, setError] = useState()
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setError()
            // console.log(response.data.photos)
            setResult(response.data)
        } catch (e) {
            setError(e.toString())
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null;
    } else {
        return (
            <View>
                {error ? <Text>{error}</Text> : null}
                <Text>{result.name}</Text>
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                
                        return <Image
                            source={{
                                uri: item
                            }}
                            style={styles.image}
                        />
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: (Dimensions.get('window').width * 0.7) * 0.66,
        marginHorizontal: 15,
        marginVertical: 15
    }
})

export default ResultsShowScreen