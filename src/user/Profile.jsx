import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Profile = () => {
  const { user } = useContext(ThemeContext)
  return (
    <section className='w-full min-h-[800px] flex flex-col items-center justify-center gap-4'>
      <div className='w-full md:w-3/4 bg-white h-96'>
        <p>{user.name}</p>
      </div>
    </section>
  )
}

export default Profile
