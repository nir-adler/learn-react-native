import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveLocalSigninScreen = () => {
    const { localSignin } = useContext(AuthContext)


    useEffect(() => {
        localSignin()
    }, [])

    return null
}

export default ResolveLocalSigninScreen
