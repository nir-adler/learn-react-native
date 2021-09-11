import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const INTERVAL_AMOUNT = 15

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
            <ColorCounter
                color='red'
                increase={() => dispatch({ type: 'change_red', payload: INTERVAL_AMOUNT })}
                decrease={() => dispatch({ type: 'change_red', payload: -1 * INTERVAL_AMOUNT })}
            />
            <ColorCounter
                color='green'
                increase={() => dispatch({ type: 'change_green', payload: INTERVAL_AMOUNT })}
                decrease={() => dispatch({ type: 'change_green', payload: -1 * INTERVAL_AMOUNT })}
            />
            <ColorCounter
                color='blue'
                increase={() => dispatch({ type: 'change_blue', payload: INTERVAL_AMOUNT })}
                decrease={() => dispatch({ type: 'change_blue', payload: -1 * INTERVAL_AMOUNT })}
            />
            <Text>{`rgb(${red},${green},${blue})`}</Text>
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen

