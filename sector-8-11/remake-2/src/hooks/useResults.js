import yelp from '../api/yelp'
import React, { useState, useEffect } from 'react'


export default () => {
    const [results, setResults] = useState()
    const [error, setError] = useState()


    const resultsApi = async (term) => {
        console.log('here')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'new york'
                }
            })

            setError()
            setResults(response.data.businesses)

        } catch (e) {
            setError(e.toString())
        }
    }

    useEffect(() => {
        resultsApi('meet')
    }, [])

    return [results, error, resultsApi]

}