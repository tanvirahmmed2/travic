import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { features } from '../data/featured'

const About = () => {
  return (
    <section className='w-full flex items-center justify-center  bg-white/40 backdrop-blur-sm py-8'>
      <div className='w-5/6 grid grid-cols-2 gap-4 text-center'>
      {
        features.map((feature) => {
          const { icon, title, description } = feature
          return <motion.div initial={{scale:0.9, opacity:0, x:20}} whileInView={{scale:1, opacity:1, x:0}} transition={{duration:0.6}} key={icon} className='w-full border-[1px] shadow-xl bg-white/30 flex flex-col items-center justify-center gap-2 p-2 rounded-lg'>
            <p className='text-3xl'><FontAwesomeIcon icon={icon} /></p>
            <p className='text-xl font-semibold'>{title}</p>
            <p className='opacity-60'>{description}</p>

          </motion.div>
        })
      }

    </div>
    </section>
  )
}

export default About
