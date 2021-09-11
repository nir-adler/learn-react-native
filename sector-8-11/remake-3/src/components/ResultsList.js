import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'


const ResultsList = ({ results, title, navigation }) => {


    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', { id: item.id })}
                >
                    <ResultDetail
                        item={item}
                    />
                </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
})

export default withNavigation(ResultsList)
