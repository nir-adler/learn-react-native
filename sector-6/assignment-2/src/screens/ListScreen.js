import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListSCreen = () => {
    const list = [
        { name: 'Nir Adler', age: 5 },
        { name: 'Guy Adler', age: 10 },
        { name: 'Naama Adler', age: 15 },
        { name: 'Benji Adler', age: 20 },
        { name: 'Dorti Adler', age: 25 },
    ]

    return <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
            </Text>
        }}
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 70
    }
})

export default ListSCreen