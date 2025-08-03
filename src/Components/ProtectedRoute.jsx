import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    let {user} = useUser()
  return (
    <>
        {
            user ? children : <Navigate to='/' />
        }
    </>
  )
}

export default ProtectedRoute