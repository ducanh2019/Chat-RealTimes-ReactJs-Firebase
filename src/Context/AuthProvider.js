import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import React, { createContext, useEffect, useState } from 'react'
import { Spin } from 'antd'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, photoURL, uid } = user
                setUser({
                    displayName,
                    email,
                    photoURL,
                    uid
                })
                setIsLoading(false)
                history('/')
                return
            }
            setIsLoading(false)
            history('/login')
        })

        // clean funtion
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider