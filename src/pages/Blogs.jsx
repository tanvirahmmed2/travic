import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Blogs = () => {
    const {blogs}= useContext(ThemeContext)
  return (
    <section className='w-full flex flex-col items-center justify-center py-8 gap-6 backdrop-blur-sm'>
      <h1 className='w-full text-xl font-semibold sm:text-4xl lg:text-5xl  text-center'>Explore the unseen</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-2'>
        {
          blogs.map((tour) => {
            const { id, title,   image,  description } = tour
            return <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.6}} key={id} className='w-full border-2 bg-white relative overflow-hidden rounded-lg p-1 flex flex-col items-center justify-between gap-2'>
              <img src={image} alt="" className='w-full max-h-[300px] object-cover rounded-md' />
              <div className='w-full flex flex-col items-center justify-between p-1'>
                <Link to={`/blogs/${title}`} className='font-semibold text-base md:text-lg'>{title}</Link>
                <p className='opacity-50 text-justify'>{description.slice(0,150)} ... see more</p>
              </div>
              
            </motion.div>
          })
        }
      </div>

    </section>
  )
}

export default Blogs
