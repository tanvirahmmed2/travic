import React from 'react'

const Register = () => {


  const handleRegister=async(e)=>{
    e.preventDefault()
    alert('under Construction')
  }
  return (
    <section className='w-full min-h-[800px] flex items-center justify-center'>
      <div className='p-2 md:p-4 w-auto h-auto flex flex-col md:flex-row items-center justify-center gap-2 bg-white rounded-lg'>

        <div className='w-auto flex flex-col gap-4 p-2 items-center justify-center'>
          <p>W</p>

        </div>


        <form onSubmit={handleRegister} className='w-auto flex flex-col gap-4 p-2'>
          <div className='w-auto flex flex-col gap-2'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' required className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
          </div>
          <div className='w-auto flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
          </div>
          <div className='w-auto flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' required className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
          </div>
          <button type='submit' className='border-cyan-700 border-[1px] rounded-md hover:bg-cyan-700 hover:text-white p-1 transition duration-500 ease-in-out'>Sign up</button>
        </form>
      </div>

    </section>
  )
}

export default Register
