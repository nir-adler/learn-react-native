import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'

const ListScreen=()=>{
    const data=[{
        name:'nir',
        age:5
    },{
        name:'guy',
        age:10
    },{
        name:'naama',
        age:15
    }]
    return(
       <FlatList 
        data={data}
        keyExtractor={(item)=>item.name}
        renderItem={({item})=><Text>{item.name} - Age {item.age}</Text>}
        
       />
    )
}

const styles=StyleSheet.create({})


export default ListScreen