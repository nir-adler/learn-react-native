import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const CHANGE_VALUE = 15

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
        case 'change_red':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload }

        default:
            return state
    }
}

const SquareScreen = () => {
    const [state, dispatch] = React.useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    })

    return (
        <View>
            <ColorCounter
                title='Red'
                increase={(value) => dispatch({ type: 'change_red', payload: CHANGE_VALUE })}
                decrease={(value) => dispatch({ type: 'change_red', payload: -1 * CHANGE_VALUE })}
            />
            <ColorCounter
                title='Green'
                increase={(value) => dispatch({ type: 'change_green', payload: CHANGE_VALUE })}
                decrease={(value) => dispatch({ type: 'change_green', payload: -1 * CHANGE_VALUE })}
            />
            <ColorCounter
                title='Blue'
                increase={(value) => dispatch({ type: 'change_blue', payload: CHANGE_VALUE })}
                decrease={(value) => dispatch({ type: 'change_blue', payload: -1 * CHANGE_VALUE })}
            />
            <Text>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
            <View style={{
                backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
                width: 100,
                height: 100
            }} />
        </View>
    )

}

const styles = StyleSheet.create({})

export default SquareScreen