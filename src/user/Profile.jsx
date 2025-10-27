import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Profile = () => {
  const {user}= useContext(ThemeContext)
  console.log(user)
  return (
    <div className='w-full min-h-[800px] flex flex-col items-center justify-center gap-4'>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default Profile
