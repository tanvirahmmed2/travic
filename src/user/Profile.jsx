import React, { useContext, useState } from 'react'
import axios from 'axios';
import { ThemeContext } from '../components/Context'
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  
  const { user, api, setNotification } = useContext(ThemeContext)
  
  const {name, email, phone, address}= user
  const [update, setUpdate]= useState(false)
  const [formData, setFormData]= useState({
    name:name,
    phone:phone || '',
    address:address || '',
  })
  const handleUpdateChange=(e)=>{
    const {name, value}= e.target
    setFormData((prev)=>({...prev, [name]:value}))
  }


  const updateProfile=async(e)=>{
    e.preventDefault()
    try {
      const response= await axios.post(`${api}/user/updateprofile`, formData, {withCredentials: true})
      setNotification(response.data.message)
    } catch (error) {
      setNotification(error.response.data.message)
    }
  }

 if(user ===null) return <p>no data found</p>
  return (
    <div className='w-full max-w-[600px] p-4 mt-2 bg-white flex flex-col items-center justify-center gap-4 rounded-lg'>
      <p className='text-8xl '><RxAvatar/></p>
      <p className='text-xl font-semibold'>Name: {name}</p>
      <p>Email: {email}</p>
      {phone !==null && <p>Phone: {phone}</p>}
      {address !==null && <p>Address: {address}</p>}
      {!update && <button onClick={()=> setUpdate(!update)} className='w-auto px-2 bg-black text-white rounded-lg p-1'>Update</button>}
      {
        update && <div className='w-3/4'>
          <form onSubmit={updateProfile} className='w-full flex flex-col items-center justify-center gap-3'>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' onChange={handleUpdateChange} value={formData.name} className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="phone">Phone</label>
              <input type="number" name='phone' id='phone' onChange={handleUpdateChange} value={formData.phone} className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="address">Address</label>
              <input type="text" name='address' id='address' onChange={handleUpdateChange} value={formData.address} className='w-full outline-none p-1 px-2 rounded-md border-[1px] border-black' />
            </div>
            <button type='submit' className='w-auto px-2 bg-sky-500 text-white rounded-lg p-1'>Submit</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Profile
