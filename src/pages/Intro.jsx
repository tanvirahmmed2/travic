import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'


const Intro = () => {
    const [formData, setFormData] = useState({
        to: 'Sundarbans Wildlife Expedition'
    })
    const {tours}= useContext(ThemeContext)

    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 min-h-[700px]  p-4 backdrop-blur-sm'>

            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <p className='text-6xl text-center font-semibold'>EXPLORE YOUR NEXT TRIP</p>
                <p className='text-3xl text-center font-semibold'>to {formData.to}</p>
                <p className='w-full md:w-4/5 lg:w-3/4 text-base lg:text-lg text-center'><span>Travic</span> turn travel dreams into reality. With expert planning, curated destinations, and a passion for exploration, we help travelers discover the world effortlessly. Explore. Experience. Enjoy.</p>
            </div>


            <form className='w-5/6 flex flex-col md:flex-row items-center justify-center gap-4'>

                <div className='w-full h-10 flex flex-col items-start justify-between bg-white border-[1px] rounded-lg overflow-hidden  border-red-600'>
                    
                    <select name="to" id="to" value={formData.to} onChange={(e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} className='w-full   outline-none   h-full'>
                        {
                            tours.map((tour) => { return <option value={tour.title} key={tour.id}>{tour.title}</option> })
                        }
                    </select>
                </div>


                <Link to={`/tours/${formData.to}`} className='w-full h-10 text-white font-semibold text-xl rounded-lg bg-red-600 flex items-center justify-center'>View</Link>
            </form>


        </section>

    )
}

export default Intro
