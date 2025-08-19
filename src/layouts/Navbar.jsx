import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <section className='w-full h-auto px-2 p-1'>
            <nav className='w-full bg-cyan-700 text-white rounded-lg p-1 px-2 h-12 flex flex-row items-center justify-around z-40'>
                <a href="/" className='text-2xl font-bold h-12 flex flex-row gap-2 items-center justify-center'>
                    <span>Daily</span>
                    <span className='text-red-300'>News</span>
                </a>

                <div className=' h-12 w-auto md:flex hidden flex-row items-center justify-center gap-1'>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 ' to="/latest">সর্বশেষ</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 ' to="/national">জাতীয়</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 ' to="/politics">রাজনীতি</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 ' to="/international">আন্তর্জাতিক</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 ' to="/">সারাদেশ</Link>


                </div >

                <div className=' h-12 w-auto lg:flex hidden flex-row items-center justify-center gap-1'>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>খেলাধুলা</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>বিনোদন</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>জব</Link>
                </div>

                <div className=' h-12 w-auto flex flex-row items-center justify-center gap-1'>
                    <p className='px-6 h-12 flex items-center justify-center hover:border-b-2 '><FaSearch/></p>
                    <p className='px-6 h-12 flex items-center justify-center hover:border-b-2 '><FaBars/></p>
                </div>

            </nav>

            
        </section>
    )
}

export default Navbar
