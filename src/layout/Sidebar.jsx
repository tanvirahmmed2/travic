import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Sidebar = () => {
  const {menu}= useContext(ThemeContext)
  return (
    <div className={`fixed top-14 right-0 flex flex-col gap-2 p-4 bg-white shadow-2xl h-screen overflow-y-scroll z-50 ${menu? 'translate-x-0': 'translate-x-full'} transition ease-in-out duration-500`}>
      <a href="/" className='text-2xl font-semibold'>Travic</a>
      <a className='hover:scale-110 transition duration-300' href="/">Home</a>
      <a className='hover:scale-110 transition duration-300' href="/tours">Tours</a>
      <a className='hover:scale-110 transition duration-300' href="/contact">Contact</a>
      <a className='hover:scale-110 transition duration-300' href="/about">About</a>
      <a className='hover:scale-110 transition duration-300' href="/blogs">Blogs</a>
      <a className='hover:scale-110 transition duration-300' href="/saved">Saved</a>
      <a className='hover:scale-110 transition duration-300' href="/profile">Profile</a>
      <a className='hover:scale-110 transition duration-300' href="/login">Login</a>

      
    </div>
  )
}

export default Sidebar
