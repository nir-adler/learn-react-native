import * as React from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'

const ColorCounter = ({ title, increase, decrease }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Button 
             title='Increase'
             onPress={increase}
            />
             <Button 
             title='Decrease'
             onPress={decrease}
            />
        </View>
    )
}


const styles = StyleSheet.create({})


export default ColorCounter