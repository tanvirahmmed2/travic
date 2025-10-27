import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Context'

const ProtectedUser = ({children}) => {
    const {user}= useContext(ThemeContext)
    if(user === null)
  return children
}

export default ProtectedUser
