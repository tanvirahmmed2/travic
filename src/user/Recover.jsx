import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../components/Context'



const Recover = () => {
  const {setNotification}= useContext(ThemeContext)


  const sendToken = async (e) => {
    e.preventDefault()
    setNotification('under Construction')
  }
  return (
    <section className='w-full min-h-[800px] flex items-center justify-center'>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='p-2 md:p-4 min-w-[320px] sm:min-w-[520px] md:min-w-[620px] w-auto h-auto flex flex-col md:flex-row items-center justify-center gap-2 bg-white rounded-lg'>

        <div className='w-auto flex flex-col p-2 items-center justify-center'>
          <p >Secure your tour & travels with</p>
          <h1 className='text-4xl font-semibold text-cyan-600'>Travic</h1>
          <p>Get back your account and enjoy you next tour</p>
          <Link className='text-xs italic mt-6 text-cyan-500' to='/register'>New visitor! Register here </Link>
        </div>


        <form onSubmit={sendToken} className='w-auto flex flex-col gap-4 p-2'>

          <div className='w-auto flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
          </div>
          <button type='submit' className='border-cyan-700 border-[1px] rounded-md hover:bg-cyan-700 hover:text-white p-1 transition duration-500 ease-in-out'>Request</button>
        </form>
      </motion.div>

    </section>
  )
}

export default Recover
