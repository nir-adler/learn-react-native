import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState()

    const resultsApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'new york',
                    term
                }
            })
            setResults(response.data.businesses)
        } catch (e) {
            console.log(e.message)
        }

    }

    useEffect(()=>{
        resultsApi('pasta')
    },[])


    return [results,resultsApi]
}