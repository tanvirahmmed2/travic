import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Profile = () => {
  const { user } = useContext(ThemeContext)
  if(user ===null) { return <p>no data found</p>}
  console.log(user)
  return (
    <div>{user.name}</div>
  )
}

export default Profile
