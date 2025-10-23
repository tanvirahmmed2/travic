import React from 'react'

const Footer = () => {
  return (
    <section className='w-full flex flex-col itemc justify-between gap-4'>
      <footer className='w-full flex flex-col md:flex-col items-center justify-center gap-4 bg-white'>

      </footer>
      <div className='w-full flex flex-col items-center justify-center  bg-cyan-700 text-white py-6 text-xs italic gap-2'>
        <p>All rights are reserved by <a href="/" className='font-semibold'>Travic</a></p>
        <p >A product of <a href="https://disibin.com" className='font-semibold'>Disibin</a></p>
      </div>

    </section>
  )
}

export default Footer
