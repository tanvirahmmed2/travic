import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import { useParams } from 'react-router-dom'

const Blog = () => {
  const { blogs } = useContext(ThemeContext)
  const { title } = useParams()
  const data = blogs.find((tour) => tour.title === title)
  const { author, date, image, description,tags } = data
  return (
    <div className='w-full min-h-[800px] flex flex-col items-center justify-center gap-5 py-8 backdrop-blur-sm p-2 bg-white/60'>
      <div className='w-full md:w-3/4 rounded-lg overflow-hidden border-2 p-2 bg-white relative'>
        <img src={image} alt="" className='w-full max-h-[600px] object-cover rounded-lg ' />
      </div>


      <h1 className='w-full text-center text-xl md:text-2xl lg:text-3xl font-semibold'>{title} <span className='text-xs'>{date}</span></h1>


      <p className='w-full md:w-3/4 text-justify'>{description} <span className='font-semibold italic'>reported by {author}</span></p>

        <div className='w-full md:w-3/4 flex flex-row items-center justify-center gap-2'>
        {
            tags.map((e)=>{
                return <p key={e} className='p-1 px-3 bg-emerald-500 text-white rounded-lg'>{e}</p>
            })
        }

        </div>
      

      
    </div>
  )
}

export default Blog
