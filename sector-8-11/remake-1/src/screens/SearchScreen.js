import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('Search')
    const [resultsApi, results, error] = useResults()



    return (
        <View style={styles.box}>
            <SearchBar
                term={term}
                setTerm={(term) => setTerm(term)}
               
                onEndEditing={resultsApi}

            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    title='Cost Effective'
                    results={results.filter((item) => item.price === '$')}
                />
                <ResultsList
                    title='Bit Pricer'
                    results={results.filter((item) => item.price === '$$')}
                />
                <ResultsList
                    title='Big Spender!'
                    results={results.filter((item) => item.price === '$$$')}
                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flex: 1
    }
})

export default SearchScreen