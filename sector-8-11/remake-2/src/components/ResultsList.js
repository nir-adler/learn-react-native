import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from '../components/ResultDetail'
import { Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ results, title, navigation }) => {
   
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Detail',{
                            id:item.id
                        })}
                        >
                            <ResultDetail
                                item={item}
                            />
                        </TouchableOpacity>

                    )
                }}

            />
            {/* <View style={styles.border} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        marginLeft: 15,
        borderColor: '#a6a6a6'
    },
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },

})

export default withNavigation(ResultsList)