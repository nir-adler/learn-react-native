import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState()

    const searchApi = async (searchTerm) => {
        // const response = await yelp.get(`/search?term=${term}`)
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'new york'
                }
            })
            setResults(response.data.businesses)
            setError()
        } catch (e) {
            // console.log(e)
            setError('Someting went wrong')

        }
    }

    useEffect(() => {
        searchApi('meet')
    }, [])


    return [searchApi,results,error]
}

