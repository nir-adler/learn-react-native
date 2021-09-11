import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>track list screen</Text>
            <Button
                title='Go to Track detail'
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen