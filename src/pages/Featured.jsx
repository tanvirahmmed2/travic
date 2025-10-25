import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Featured = () => {
  const { tours } = useContext(ThemeContext)
  return (
    <section className='w-full flex flex-col items-center justify-center py-8 gap-6 backdrop-blur-sm bg-white/60'>
      <h1 className='w-full text-xl font-semibold sm:text-4xl lg:text-5xl  text-center'>Enjoy your next trip</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-2'>
        {
          tours.slice(0, 6).map((tour) => {
            const { id, title, location, duration, image, category, description } = tour
            return <div key={id} className='w-full border-2 bg-white relative overflow-hidden rounded-lg p-1 flex flex-col items-center justify-between gap-2'>
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
            </div>
          })
        }
      </div>

    </section>
  )
}

export default Featured
