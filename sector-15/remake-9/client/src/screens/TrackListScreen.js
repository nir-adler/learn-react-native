import * as React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({navigation}) => {
    const { state, fetchTracks } = React.useContext(TrackContext)

    React.useEffect(() => {
        fetchTracks()
    }, [])
    console.log(state.length)
    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={()=>navigation.navigate('TrackDetail',{_id:item._id})}
                    >
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>

                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
})

export default TrackListScreen