import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = () => {
    const { state, fetchTracks } = useContext(TrackContext)

    // console.log(state)

    return (
        <View>
            <NavigationEvents
                onWillFocus={fetchTracks}
            />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>);
                }} />

        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen