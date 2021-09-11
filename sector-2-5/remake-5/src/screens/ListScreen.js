import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const data = [
        { name: 'nir', age: 5 },
        { name: 'guy', age: 10 },
        { name: 'naama', age: 15 },
    ]
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item.name} - Age {item.age}</Text>}
                keyExtractor={(item)=>item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ListScreen