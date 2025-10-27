import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ThemeContext } from './Context'

const ProtectedUser = ({ children }) => {
  const { user, setNotification } = useContext(ThemeContext)
  const [checking, setChecking] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 500)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (!checking && user) {
      setNotification('Already Logged in')
      setRedirect(true)
    }
  }, [checking, user, setNotification])

  if (checking) {
    return <p>Checking information</p>
  }

  if (redirect) {
    return <Navigate to="/profile" replace />
  }

  return children
}

export default ProtectedUser
