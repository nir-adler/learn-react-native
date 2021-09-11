import React, { useContext,useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveLocalSigninScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(()=>{
        tryLocalSignin()

    },[])

    return null
}


export default ResolveLocalSigninScreen