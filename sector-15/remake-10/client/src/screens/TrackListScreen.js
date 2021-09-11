import * as React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import { useFocusEffect } from '@react-navigation/native'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = React.useContext(TrackContext)
    useFocusEffect(
        React.useCallback(() => {
            fetchTracks()
        }, [])
    )


    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <TouchableOpacity
                    onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                >
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.name}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
})

export default TrackListScreen