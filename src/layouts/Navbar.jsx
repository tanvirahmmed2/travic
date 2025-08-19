import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <section className='w-full h-auto px-2 p-1'>
            <nav className='w-full bg-cyan-700 text-white rounded-lg p-1 px-2 h-12 flex flex-row items-center justify-around'>
                <a href="/" className='text-2xl font-bold'>Daily News</a>

                <div className=' h-12 w-auto md:flex hidden flex-row items-center justify-center gap-1'>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>সর্বশেষ</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>জাতীয়</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>রাজনীতি</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>আন্তর্জাতিক</Link>
                    <Link className='px-2 h-12 flex items-center justify-center hover:border-b-2 '>সারাদেশ</Link>


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
