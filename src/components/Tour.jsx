import React, { useContext } from 'react'
import { ThemeContext } from './Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom'
import { faDollar, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Tour = () => {
  const { tours } = useContext(ThemeContext)
  const { title } = useParams()
  const data = tours.find((tour) => tour.title === title)
  const { image, description, location, duration, price, rating, includes, highlights } = data
  return (
    <div className='w-full flex flex-col items-center justify-center gap-5 py-8 backdrop-blur-sm p-2 bg-white/60'>
      <div className='w-full md:w-3/4 rounded-lg overflow-hidden border-2 p-2 bg-white relative'>
        <img src={image} alt="" className='w-full max-h-[600px] object-cover rounded-lg ' />
        <p onClick={() => alert('Saved')} className='text-2xl md:text-4xl hover:scale-110 hover:text-pink-500 transition duration-500 ease-in-out cursor-pointer absolute top-4 right-4 text-white'><FontAwesomeIcon icon={faHeart} /></p>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center justify-around'>
          <p>{duration}</p>
          <p> <FontAwesomeIcon icon={faStar} className='text-amber-500'/> {rating}</p>
          <p><FontAwesomeIcon icon={faDollar}/> {price}</p>
        </div>
        <h1 className='w-full text-center text-lg md:text-2xl lg:text-3xl font-semibold'>{title} <span className='text-xs'>{location}</span></h1>

      </div>
      <p>{description}</p>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center'>
        <div className='w-auto flex flex-col gap-2'>
          <h1 className='text-lg md:text-2xl font-semibold'>Special highlights</h1>
          {
            highlights.map((e) => {
              return <p key={e}>{e}</p>
            })
          }
        </div>
        <div>
          <h1 className='text-lg md:text-2xl font-semibold'>Package includes</h1>
          {
            includes.map((e) => {
              return <p key={e}>{e}</p>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Tour
