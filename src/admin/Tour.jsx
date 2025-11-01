import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../components/Context'

import { MdDeleteOutline } from "react-icons/md";

const Tour = () => {
  const {tours}= useContext(ThemeContext)
  return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <form className='w-full flex flex-col items-start justify-center gap-4 bg-white p-3 rounded-lg'>
                <h1 className='w-full text-2xl font-semibold text-center'>Add new tour package</h1>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="title">Tilte</label>
                    <input type="text" name='title' id='title' required className='w-full px-4 p-2 border-2 outline-none' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="location">Location</label>
                    <input type="text" name='location' id='location' required className='w-full px-4 p-2 border-2 outline-none' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="image">Image</label>
                    <input type="file" name='image' id='image' accept='image/*' required className='w-full px-4 p-2 border-2 outline-none' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" className='w-full px-4 p-2 border-2 outline-none resize-none' ></textarea>
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="hightlights">Highlights</label>
                    <input type="text" name='hightlights' id='hightlights' required className='w-full px-4 p-2 border-2 outline-none' placeholder='add (,) between hightlights' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="includes">Includes</label>
                    <input type="text" name='includes' id='includes' required className='w-full px-4 p-2 border-2 outline-none' placeholder='add (,) between includes' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name='tags' id='tags' required className='w-full px-4 p-2 border-2 outline-none' placeholder='add (,) between tags' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="departure">Departure</label>
                    <input type="date" name='departure' id='departure' required className='w-full px-4 p-2 border-2 outline-none' />
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name='duration' id='duration' required className='w-full px-4 p-2 border-2 outline-none' placeholder='(2 days / 1 night)'/>
                </div>
                <div className='w-full flex flex-col items-start justify-center gap-2 '>
                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' id='price' required className='w-full px-4 p-2 border-2 outline-none' placeholder='BDT'/>
                </div>
                <button type='submit' className='w-full bg-sky-400 p-1'>Submit</button>
            </form>
            <div className='w-full flex flex-col itemc justify-center gap-4 bg-white py-4 rounded-lg px-1 md:px-3'>
                <h1 className='w-full text-center font-semibold text-2xl'>Available tours : {tours.length}</h1>
                <div className='w-full flex flex-row items-center justify-between gap-1 border-b-2 p-1'>
                    <p className='w-full'>Title</p>
                    <p className='w-full md:flex hidden'>Description</p>
                    <p>Action</p>

                </div>
                {
                   tours.length > 0 ? <div className='w-full flex flex-col items-center justify-center gap-4'>
                        {
                            tours.map((tour) => {
                                const { title, description, _id } = tour
                                return <div key={_id} className='w-full flex flex-row items-center justify-between gap-1'>
                                    <Link className='w-full font-semibold' to={`/tours/${title}`}>{title.slice(0, 20)} <span className='font-light'>...more</span></Link>
                                    <p className='w-full md:flex hidden' >{description.slice(0, 20)}....</p>
                                    <button><MdDeleteOutline /></button>
                                </div>
                            })
                        }
                    </div> : <p>No blog data found</p>
                }

            </div>

        </div>
    )
}

export default Tour
