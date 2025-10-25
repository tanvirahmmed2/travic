import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cities } from '../data/city'


const Intro = () => {
    const [formData, setFormData]= useState({
        from: 'Dhaka',
        to: 'Dubai'
    })
    
    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 min-h-[700px]  p-4'>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <p className='text-6xl text-center font-semibold'>EXPERINCE THE</p>
                <p className='text-6xl text-center font-semibold'>NATURE'S BEAUTY</p>
                <p className='w-full md:w-4/5 lg:w-3/4 text-base lg:text-lg text-center'><span>Travic</span> turn travel dreams into reality. With expert planning, curated destinations, and a passion for exploration, we help travelers discover the world effortlessly. Explore. Experience. Enjoy.</p>
            </div>
            <Link to='/tours' className='p-2 px-8 rounded-lg text-white hover:bg-red-400 bg-red-500 '>Tours</Link>


            <form className='w-5/6 flex flex-col md:flex-row items-center justify-center gap-4'>
                <div className='w-full h-14 flex flex-col items-start justify-between bg-white border-[1px] rounded-lg overflow-hidden px-4 border-red-600'>
                    <label htmlFor="from">From</label>
                    <select name="from" id="from"  value={formData.from} className='w-full outline-none  px-2 h-full'>
                        {
                            cities.map((city) => { return <option value={city} key={city}>{city}</option> })
                        }
                    </select>
                </div>
                <div className='w-full h-14 flex flex-col items-start justify-between bg-white border-[1px] rounded-lg overflow-hidden px-4 border-red-600'>
                    <label htmlFor="to">To</label>
                    <select name="to" id="to" value={formData.to} className='w-full   outline-none  px-2 h-full'>
                        {
                            cities.map((city) => { return <option value={city} key={city}>{city}</option> })
                        }
                    </select>
                </div>


                <button className='w-full h-14 text-white font-semibold text-xl rounded-lg bg-red-600'>Search</button>
            </form>


        </section>

    )
}

export default Intro
