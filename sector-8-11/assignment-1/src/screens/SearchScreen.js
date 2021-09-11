import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('Search')
    const [results, setResults] = useState([])
    const [error, setError] = useState()

    const searchApi = async () => {
        // const response = await yelp.get(`/search?term=${term}`)
        try {
            const response = await yelp.get('/search', {
                params: {
                    term,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
            setError()
        } catch (e) {
            // console.log(e)
            setError('Someting went wrong')

        }
    }



    return (<View style={styles.box}>
        <SearchBar
            changeText={(value) => setTerm(value)}
            value={term}
            onTermSubmit={searchApi}
        />
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} results</Text>
    </View>)
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flex: 1
    }
})

export default SearchScreen