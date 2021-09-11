import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const FIX_JUMP = 15

const reducer = (state, action) => {
    console.log('here')
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
            <ColorCounter
                color="red"
                Increase={() => dispatch({ type: 'change_red', payload: FIX_JUMP })}
                Decrease={() => dispatch({ type: 'change_red', payload: -1 * FIX_JUMP })}
            />
            <ColorCounter
                color="green"
                Increase={() => dispatch({ type: 'change_green', payload: FIX_JUMP })}
                Decrease={() => dispatch({ type: 'change_green', payload: -1 * FIX_JUMP })}
            />
            <ColorCounter
                color="blue"
                Increase={() => dispatch({ type: 'change_blue', payload: FIX_JUMP })}
                Decrease={() => dispatch({ type: 'change_blue', payload: -1 * FIX_JUMP })}
            />
            <Text>{`rgb(${red},${green},${blue})`}</Text>
            <View
                style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen