import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const getRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}


const ColorScreen = () => {
    const [colors,setColors]=useState([])
    return (
        <View>
            <Button
                title='Add a color'
                onPress={()=>setColors([...colors,getRgb()])}
            />
            <FlatList
                data={colors}
                keyExtractor={(item)=>item}
                renderItem={({item})=><View style={{backgroundColor:item,width:100,height:100}} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


export default ColorScreen