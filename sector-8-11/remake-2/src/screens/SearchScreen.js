import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'



const SearchScreen = () => {
    const [term, setTerm] = useState('Search')
    const [results, error, resultsApi] = useResults()

    // console.log(results)rr

    if (!results) {
        return null
    } else {
        return (
            <View style={styles.box}>
                <SearchBar
                    setTerm={(value) => setTerm(value)}
                    term={term}
                    submit={()=>resultsApi(term)}
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
                        title='Big Spender'
                        results={results.filter((item) => item.price === '$$$')}
                    />
                </ScrollView>

            </View>
        )
    }


}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flex: 1
    }
})

export default SearchScreen