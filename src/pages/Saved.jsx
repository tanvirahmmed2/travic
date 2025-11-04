import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Saved = () => {
  const {user}= useContext(ThemeContext)
  const savedData= user.saved
  return (
    <div>
      
    </div>
  )
}

export default Saved
