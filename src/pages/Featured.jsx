import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

const Featured = () => {
  const { tours } = useContext(ThemeContext)
  return (
    <section className='w-full flex flex-col items-center justify-center py-8'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center p-2'>
        {
          tours.slice(0, 6).map((tour) => {
            const { id, title, location, duration, image, category, description } = tour
            return <div key={id} className='w-full border-2 bg-white relative overflow-hidden rounded-lg p-1'>
              <img src={image} alt=""  className='w-full rounded-md'/>
              <p className='bg-white text-emerald-400 text-xs p-1 px-4 rounded-lg absolute top-3 left-3'>{category}</p>
              <div>
                <Link to={`/tours/${title}`}>{title}</Link>
                <p>{location}</p>
                <p>{description}</p>
              </div>
              <p>{duration}</p>
            </div>
          })
        }
      </div>

    </section>
  )
}

export default Featured
