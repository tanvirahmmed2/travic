import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../components/Context'

const Tours = () => {
  const {tours}= useContext(ThemeContext)
  return (
    <section className='w-full flex flex-col items-center justify-center py-8 gap-6 backdrop-blur-sm'>
      <h1 className='w-full text-xl font-semibold sm:text-4xl lg:text-5xl  text-center'>Make every step memorable</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-2'>
        {
          tours.map((tour) => {
            const { id, title, location, duration, image, category, description } = tour
            return <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.6}} key={id} className='w-full border-2 bg-white relative overflow-hidden rounded-lg p-1 flex flex-col items-center justify-between gap-2'>
              <img src={image} alt="" className='w-full rounded-md' />
              <p className='bg-white text-emerald-400 text-xs p-1 px-4 rounded-lg absolute top-3 left-3'>{category}</p>
              <div className='w-full flex flex-col items-center justify-between p-1'>
                <Link to={`/tours/${title}`} className='font-semibold text-base md:text-lg'>{title}</Link>
                <p className='opacity-50 text-justify'>{description}</p>
              </div>
              <div className='w-full flex flex-row items-center justify-between p-1 text-xs'>
                <p>{duration}</p>
                <p>{location}</p>
              </div>
            </motion.div>
          })
        }
      </div>

    </section>
  )
}

export default Tours
