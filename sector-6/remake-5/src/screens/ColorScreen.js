import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const getRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}


const ColorScreen = () => {
    const [colors,setColors]=useState([])
    console.log(colors)

    return (
        <View>
            <Button
                title='Add Color'   
                onPress={()=>setColors([...colors,getRgb()])}

            />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item})=><View
                    style={{
                        width:100,
                        height:100,
                        backgroundColor:item
                    }}
                
                />}
            />

        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorScreen