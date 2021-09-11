import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'



const Counter=({color,decrease,increase})=>{
    return(
        <View>
            <Text>{color}</Text>
            <Button
                title={`More ${color}`}
                onPress={increase}
            />      
             <Button
                title={`Less ${color}`}
                onPress={decrease}
            />
        </View>
    )
}

const styles=StyleSheet.create({})

export default Counter