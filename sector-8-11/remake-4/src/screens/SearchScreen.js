import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('Search')
    const [results, searchApi] = useResults()

    if (!results) {
        return null
    } else {
        return (
            <View style={styles.box}>
                <SearchBar
                    setTerm={(value) => setTerm(value)}
                    term={term}
                    onSubmit={() => searchApi(term)}
                />
                <ResultsList
                    title='Cost Effective'
                    results={results.filter((item) => item.price === '$')}
                />
                <ResultsList
                    title='Bit Pricer'
                    results={results.filter((item) => item.price === '$$')}
                />
                <ResultsList
                    title='Big Spender'
                    results={results.filter((item) => item.price === '$$$')}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default SearchScreen