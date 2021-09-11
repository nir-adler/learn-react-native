import React from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native'
import ImageComponent from "../Components/ImageComponent";


const ImageScreen = ()=>{
    const data=[
        {file:require('../../assets/forest.jpg'),name:'Forest'},
        {file:require('../../assets/beach.jpg'),name:'Beach'},
        {file:require('../../assets/mountain.jpg'),name:'Mountain'},
    ]

    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=><ImageComponent file={item.file} name={item.name} />}
        />
    )
}


const styles=StyleSheet.create({})


export default ImageScreen