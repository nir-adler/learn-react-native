import React, { useReducer } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_counter':
            return { ...state, counter: state.counter + action.payload }
        default:
            return state
    }
}


const CounterScreen = () => {
    console.log('here')
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    // const [counter, setCounter] = useState(0)
    const {counter}=state

    return <View>
        <Text>counter screen</Text>
        <Button
            title="Increase"
            onPress={() => dispatch({ type: 'change_counter', payload: 1 })}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({ type: 'change_counter', payload: -1 })}
        />
        <Text>Current Count:{state.counter}</Text>
    </View>
}


const styles = StyleSheet.create({

})


export default CounterScreen
