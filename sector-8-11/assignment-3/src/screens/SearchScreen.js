import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    // console.log(props)
    const [term, setTerm] = useState('')
    const [searchApi, results, error] = useResults()
    return (
        <View style={styles.box}>
            <SearchBar
                changeText={(value) => setTerm(value)}
                value={term}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    title='Cost Effective'
                    results={results.filter((item) => item.price === '$')}
                />
                <ResultsList
                    title='Bit pricier'
                    results={results.filter((item) => item.price === '$$')}
                />
                <ResultsList
                    title='Big spender'
                    results={results.filter((item) => item.price === '$$$')}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flex: 1,
    }
})

export default SearchScreen