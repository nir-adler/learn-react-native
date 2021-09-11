import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [error, setError] = useState()
    const [results, setResults] = useState([])

    const resultsApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {

                params: {
                    location: 'new york',
                    limit: 50,
                    term: searchTerm
                }
            })
            setError('')
            setResults(response.data.businesses)
        } catch (e) {
            setError(e.toString())
        }
    }

    useEffect(() => {
        resultsApi('meet')
    }, [])

    return [resultsApi,results,error]
}