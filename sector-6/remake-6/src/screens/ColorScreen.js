import * as React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}
const ColorScreen = () => {
    const [colors, setColors] = React.useState([])


    return (
        <View>
            <Button
                title='Add Color'
                onPress={() => setColors([...colors, randomColor()])}
            />
            <FlatList
                data={colors}
                keyExtractor={(color) => color}
                renderItem={({ item }) => <View style={{...styles.color, backgroundColor:item}}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    color:{
        width:100,
        height:100
    }
})


export default ColorScreen