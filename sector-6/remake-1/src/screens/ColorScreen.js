import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

const randomColors = () => {
    const red = Math.floor((Math.random() * 256))
    const green = Math.floor((Math.random() * 256))
    const blue = Math.floor((Math.random() * 256))

    return `rgb(${red},${green},${blue})`
}

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    return (
        <View>
            <Button
                title="Add color"
                onPress={()=>setColors([...colors,randomColors()])}
            />
            <FlatList
                data={colors}
                keyExtractor={(item)=>item}
                renderItem={({item})=><View style={{width:100,height:100,backgroundColor:item}}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
})



export default ColorScreen