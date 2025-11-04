import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Context'
import { Navigate } from 'react-router-dom'
import Loader from './Loader'

const AdminProtector = ({children}) => {
  const { user,isAdmin, setNotification } = useContext(ThemeContext)
  const [checking, setChecking] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 500)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (!checking && !isAdmin) {
      setRedirect(true)
    }
  }, [checking, user, setNotification, isAdmin])

  if (checking) {
    return <Loader/>
  }

  if (redirect) {
    setNotification("Your are not admin")
    return <Navigate to="/" replace />
  }

  return children
}


export default AdminProtector
