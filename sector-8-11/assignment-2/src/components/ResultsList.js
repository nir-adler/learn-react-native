import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import SingleDetail from '../components/SingleDetail'
import { Dimensions } from 'react-native'

const ResultList = ({ title, results, navigation }) => {

    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('ResultsShow')}
                        >

                            <SingleDetail
                                rating={item.rating}
                                reviews={item.review_count}
                                name={item.name}
                                picture={item.image_url}
                            />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        // flex: 5,
        borderBottomWidth: 0.8,
        // marginLeft: 15,
        marginTop: 12,
        minHeight: 150,
        minWidth: Dimensions.get('window').width * 0.7,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
})

export default ResultList