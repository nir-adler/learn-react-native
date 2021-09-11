import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import SingleDetail from '../components/SingleDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ results, title, navigation }) => {
    if (!results.length) {
        return null
    } else {
        return (
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    data={results}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResultShow', {
                                    resultId: item.id
                                })}
                            >
                                <SingleDetail
                                    item={item}

                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
})

export default withNavigation(ResultsList)