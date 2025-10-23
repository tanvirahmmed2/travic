import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { ThemeContext } from '../components/Context';

const Navbar = () => {
  const {menu, setMenu}= useContext(ThemeContext)



  return (
    <nav className='w-full h-16 backdrop-blur-3xl bg-white/70 fixed flex px-4 md:px-8 flex-row items-center justify-around md:justify-between'>
      <a href="/" className=' font-semibold text-xl md:text-3xl sm:text-2xl'>
        Travic
      </a>


      <div className='h-full w-auto hidden md:flex flex-row items-center justify-center gap-2'>
        <Link className='h-full flex items-center justify-center px-4 hover:border-b-2 border-cyan-700' to='/'>Home</Link>
        <Link className='h-full flex items-center justify-center px-4 hover:border-b-2 border-cyan-700' to='/tour'>Tour</Link>
        <Link className='h-full flex items-center justify-center px-4 hover:border-b-2 border-cyan-700' to='/campaign'>Campaign</Link>
        <Link className='h-full flex items-center justify-center px-4 hover:border-b-2 border-cyan-700' to='/about'>About</Link>
        <Link className='h-full flex items-center justify-center px-4 hover:border-b-2 border-cyan-700' to='/book'>Book</Link>

      </div>

      <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
        <Link to='/login' className='h-8 rounded-lg flex items-center justify-center px-4 transition duration-500 ease-in-out hover:text-white hover:bg-cyan-700 '>Login</Link>
        <button onClick={()=>setMenu(!menu)} className='text-xl px-2'><MdOutlineMenu/></button>
      </div>
      
    </nav>
  )
}

export default Navbar
