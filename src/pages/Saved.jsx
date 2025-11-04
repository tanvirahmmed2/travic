import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'
import { MdDeleteOutline } from 'react-icons/md'

const Saved = () => {
  const { user } = useContext(ThemeContext)
  const savedData = user.saved
  if (savedData === null) return <p>no tour saved</p>
  return (
    <div className='w-full max-w-[600px] flex flex-col items-center justify-center gap-6 mt-6 '>
      <p className='text-3xl font-semibold text-center text-sky-400'>Enjoy your safe tour with Travic</p>
      <div className='w-full flex flex-col items-center justify-center rounded-lg shadow-sm gap-4 bg-white p-2'>
        <h1 className='text-2xl font-semibold border-b-2 py-2'>Saved tours</h1>
        
        {
          savedData.map((tour) => {
            const { title, tourId } = tour
            return <div key={tourId} className='w-full flex flex-row items-center justify-between  '>
              <Link to={`/tours/${title}`} >{title}</Link>
              <p><MdDeleteOutline /></p>
            </div>
          })
        }
      </div>


    </div>
  )
}

export default Saved
