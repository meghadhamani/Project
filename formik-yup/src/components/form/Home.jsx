import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home