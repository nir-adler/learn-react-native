import React,{useState} from 'react'
import { Button,View, Text, StyleSheet,FlatList } from 'react-native'


const rbg=()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`
}

const ColorScreen = () => {
    const [colors,setColors]=useState([])


    return (
        <View>
            <Button
                title="Add color"
                onPress={()=>setColors([...colors,rbg()])}
            />
            <FlatList
                    data={colors}
                    keyExtractor={(item)=>item}
                    renderItem={({item})=><View style={{width:100,height:100,backgroundColor:item}}></View>}
            />

        </View>
    )
    
}


const styles = StyleSheet.create({})


export default ColorScreen