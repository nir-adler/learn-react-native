import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Counter from '../components/Counter'

const AMOUT_OF_CHANGE = 15

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }


}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state

    return (
        <View>
            <Counter
                color='red'
                decrease={() => dispatch({ type: 'change_red', payload: -1 * AMOUT_OF_CHANGE })}
                increase={() => dispatch({ type: 'change_red', payload: AMOUT_OF_CHANGE })}
            />
            <Counter
                color='green'
                decrease={() => dispatch({ type: 'change_green', payload: -1 * AMOUT_OF_CHANGE })}
                increase={() => dispatch({ type: 'change_green', payload: AMOUT_OF_CHANGE })}
            />
            <Counter
                color='blue'
                decrease={() => dispatch({ type: 'change_blue', payload: -1 * AMOUT_OF_CHANGE })}
                increase={() => dispatch({ type: 'change_blue', payload: AMOUT_OF_CHANGE })}
            />
            <Text>{`(${red},${green},${blue})`}</Text>
            <View 
                style={{backgroundColor:`rgb(${red},${green},${blue})`,width:100,height:100}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


export default SquareScreen