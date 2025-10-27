import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from './Context'

const Notification = () => {
  const { notification, setNotification } = useContext(ThemeContext)

  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [notification, setNotification])

  if (!notification) return null

  return (
    <div className='w-full fixed top-14 h-8 bg-black/20 text-white flex flex-row items-center justify-around px-2'>
      <p className=''>{notification}</p>
      <button
        onClick={() => setNotification(null)}
        className='text-white hover:text-gray-300'
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default Notification
