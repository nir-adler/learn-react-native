import React from 'react'
import { View, Text, StyleSheet,TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'



const SearchBar = ({term,setTerm,submit}) => {
    return (
        <View style={styles.box}>
               <Feather name="search" style={styles.icon} />
            <TextInput
                autoCapitalize='none'
                autoCurrent={false}
                value={term}
                onChangeText={setTerm}
                onEndEditing={submit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop:10,
        backgroundColor:'#e6e6e6',
        height: 50,
        borderRadius:5,
        flexDirection: 'row',
        marginHorizontal:15,
    },
    icon:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar