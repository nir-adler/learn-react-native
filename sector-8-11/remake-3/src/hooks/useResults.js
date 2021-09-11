import yelp from '../api/yelp'
import React, { useState, useEffect } from 'react'


export default ()=> {
    const [results, setResults] = useState()
    const [error, setError] = useState()

    
    const resultsApi = async (term) => {
        try {
            const response=await yelp.get('/search',{
                params:{
                    limit:50,
                    location:'new york',
                    term
                }
            })
            setError()
            setResults(response.data.businesses)
        } catch (e) {
            setError(e.toString())
        }
    }

    useEffect(()=>{
        resultsApi('pasta')
    },[])


    return [results,error,resultsApi]
}