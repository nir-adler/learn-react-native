import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from '../components/ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results,navigation }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TouchableOpacity
                onPress={()=>navigation.navigate('Show',{id:item.id})}
                >
                    <ResultDetail
                        item={item}
                    />
                </TouchableOpacity>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

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