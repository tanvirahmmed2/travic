import React from 'react'
import Featured from '../pages/Featured'
import { Link } from 'react-router-dom'
import { cities } from '../data/city'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faHeartCircleCheck, faMap, faUserShield } from '@fortawesome/free-solid-svg-icons';


const features = [
  {
    icon: faMap,
    title: 'International Network',
    description: 'Connect with trusted partners and destinations across 50+ countries for seamless global travel.'
  },
  {
    icon: faHeartCircleCheck,
    title: 'Top Rated',
    description: 'Rated 4.9★ by thousands of happy travelers for premium service and unforgettable trips.'
  },
  {
    icon: faUserShield,
    title: 'Best Security',
    description: 'Your safety is our priority — secure payments, verified tours, and trusted travel partners.'
  },
  {
    icon: faHeadset,
    title: 'Dedicated Support',
    description: 'Our expert team is available 24/7 to assist you from booking to boarding and beyond.'
  }
]


const Home = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6'>

      <div className='w-full flex flex-col items-center justify-center gap-6 min-h-[700px]  p-4'>

        <div className='w-full flex flex-col items-center justify-center gap-2'>
          <p className='text-6xl text-center font-semibold'>EXPERINCE THE</p>
          <p className='text-6xl text-center font-semibold'>NATURE'S BEAUTY</p>
          <p className='text-base lg:text-lg text-center'><span>Travic</span> turn travel dreams into reality. With expert planning, curated destinations, and a passion for exploration, we help travelers discover the world effortlessly. Explore. Experience. Enjoy.</p>
        </div>
        <Link to='/book' className='p-2 px-8 rounded-lg text-white hover:bg-red-400 bg-red-500 '>Book</Link>

      </div>

      <form className='w-5/6 flex flex-col md:flex-row items-center justify-center gap-4'>

        <select name="from" id="from" className='w-full h-14 bg-white border-[1px] border-red-600 outline-none rounded-lg p-4'>
          <option value="">choose your location</option>
          {
            cities.map((city) => { return <option value={city} key={city}>{city}</option> })
          }
        </select>
        <select name="to" id="to" className='w-full h-14 bg-white border-[1px] border-red-600 outline-none rounded-lg p-4'>
          <option value="" >choose your destionation</option>
          {
            cities.map((city) => { return <option value={city} key={city}>{city}</option> })
          }
        </select>
        <button className='w-full h-14 text-white font-semibold text-xl rounded-lg bg-red-600'>Search</button>
      </form>

      <div className='w-5/6 flex flex-col md:flex-row items-center justify-center gap-4 text-center'>
        {
          features.map((feature) => {
            const { icon, title, description } = feature
            return <div key={icon} className='w-full bg-white flex flex-col items-center justify-center gap-2 p-2 rounded-lg'>
              <p><FontAwesomeIcon icon={icon} /></p>
              <p className='text-xl font-semibold'>{title}</p>
              <p className='opacity-60'>{description}</p>

            </div>
          })
        }

      </div>







      <Featured />

    </section>
  )
}

export default Home
