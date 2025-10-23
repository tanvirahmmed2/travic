import React from 'react'
import Featured from '../pages/Featured'
import {Link} from 'react-router-dom'
import { cities } from '../data/city'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCertificate } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6'>

      <div className='w-full flex flex-col items-center justify-center gap-6 min-h-[700px] p-4'>

        <div className='w-full flex flex-col items-center justify-center gap-2'>
          <p>EXPERINCE THE</p>
          <p>NATURE'S BEAUTY</p>
        </div>
        <Link to='/book'>Book</Link>

      </div>

      <div className='w-full flex items-center justify-center bg-white relative h-20'>
        <form className='w-4/5 flex flex-col md:flex-row items-center justify-center gap-4 absolute -top-1/2'>

          <select name="from" id="from" className='w-full h-14 bg-white border-2 border-red-600 outline-none rounded-lg p-4'>
            <option value="">choose your location</option>
            {
              cities.map((city) => { return <option value={city} key={city}>{city}</option> })
            }
          </select>
          <select name="to" id="to" className='w-full h-14 bg-white border-2 border-red-600 outline-none rounded-lg p-4'>
            <option value="" >choose your destionation</option>
            {
              cities.map((city) => { return <option value={city} key={city}>{city}</option> })
            }
          </select>
          <button className='w-full h-14 text-white font-semibold text-3xl rounded-lg bg-red-600'>Search</button>
        </form>


        <div>
          <FontAwesomeIcon icon={faCertificate}/>
        </div>

      </div>






      <Featured />

    </section>
  )
}

export default Home
