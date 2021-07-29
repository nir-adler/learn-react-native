import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'



const ColorCounter = ({ color, Increase, Decrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`More ${color}`}
                onPress={Increase}
            />
            <Button
                title={`Less ${color}`}
                onPress={Decrease}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


export default ColorCounter