import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'



const ListScreen = () => {
    const data = [
        { name: 'nir', age: 5 },
        { name: 'guy', age: 10 },
        { name: 'naama', age: 15 },
        { name: 'benji', age: 20 }
    ]

    return <FlatList
        data={data}
        keyExtractor={(item)=>item.name}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />

}


const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 70
    }
})


export default ListScreen