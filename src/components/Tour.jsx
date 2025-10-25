import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import { useParams } from 'react-router-dom'

const Tour = () => {
  const {tours}= useContext(ThemeContext)
  const {title}= useParams()
  const data= tours.find((tour)=> tour.title=== title)
  const {image, description, location,duration, price, rating, includes, highlights}=data
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5 py-8 backdrop-blur-sm p-2 bg-white/60'>
      <img src={image} alt=""  className='w-full md:w-3/4 max-h-[600px] rounded-lg'/>
      <h1 className='w-full text-center text-lg md:text-2xl lg:text-3xl font-semibold'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Tour
