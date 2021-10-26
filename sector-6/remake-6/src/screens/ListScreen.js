import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const data = [
        { name: 'Nir Adler', age: 30 },
        { name: 'Guy Adler', age: 31 }
    ]

    return <View>
        <FlatList
            data={data}
            // horizontal
            keyExtractor={(item)=>item.name}
            renderItem={({ item }) => <Text >{item.name}</Text>}
        />
    </View>
}


const styleSheet = StyleSheet.create({

})


export default ListScreen