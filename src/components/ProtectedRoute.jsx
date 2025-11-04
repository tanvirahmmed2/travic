import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Context'
import { Navigate } from 'react-router-dom'
import Loader from './Loader'

const ProtectedRoute = ({children}) => {
     const { user, setNotification } = useContext(ThemeContext)
  const [checking, setChecking] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 500)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (!checking && user!==null) {
      setRedirect(true)
    }
  }, [checking, user, setNotification])

  if (checking) {
    return <Loader/>
  }

  if (redirect) {
    return <Navigate to="/profile" replace />
  }

  return children

}

export default ProtectedRoute
