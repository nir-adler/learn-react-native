import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'

const ListScreen=()=>{
    const data=[
        {
            name:'Nir',
            age:5,
        },
        {
            name:'Guy',
            age:10,
        },
        {
            name:'Naama',
            age:15,
        }
    ]

    return <FlatList
        data={data}
        renderItem={({item})=><Text>{item.name} - Age {item.age}</Text>}
        keyExtractor={(item)=>item.name}
    />
}

const styles=StyleSheet.create({})

export default ListScreen