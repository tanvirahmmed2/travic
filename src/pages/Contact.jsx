import React, { useContext, useState } from 'react'
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import { ThemeContext } from '../components/Context';
import axios from 'axios';

const Contact = () => {

  const {api, setNotification}= useContext(ThemeContext)
  
  const [formData, setFormData]= useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange=(e)=>{
    const {name, value}= e.target
    setFormData((prev)=>({...prev, [name]: value}))
  }


  const sendMessage=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(
        `${api}/message/newmessage`,
        formData,
        { withCredentials: true }
      );
      setNotification(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setNotification(error.response.data.message)
      console.log(error)
    }
  }
  return (
    <section className='w-full min-h-[800px] p-2  flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold text-emerald-600'>Contact Us</h1>
      <p className='text-base sm:text-lg text-center'>Get in touch with our team </p>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-full flex items-start justify-start flex-col gap-6'>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-red-500'><CiLocationOn /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Address</h1>
              <p>Rahmatpur Bypass</p>
              <p>Sadar, Mymensingh 2208</p>
            </div>
          </div>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-emerald-500'><CiMail /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Email</h1>
              <a href='mailto:support@travic.com'>support@travic.com</a>
              <a href="https://travic.com">travic.com</a>
            </div>
          </div>


          <div className='w-auto flex flex-row items-start justify-center gap-4 '>
            <p className='text-4xl text-cyan-500'><CiPhone /></p>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg font-bold'>Phone</h1>
              <a href="tel:+8801306556358">+8801306556358</a>
            </div>
          </div>


          

        </div>


        <div className='w-full flex items-start justify-center flex-col gap-2 p-6 bg-white/30 rounded-xl shadow-lg'>
          <p className='text-2xl font-semibold'>Send us a Message</p>
          <form  onSubmit={sendMessage} className='w-full flex flex-col items-start justify-center gap-4'>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' required onChange={handleChange} value={formData.name} className='w-full px-4 p-2 border-2 outline-none'  />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' required  onChange={handleChange} value={formData.email}  className='w-full px-4 p-2 border-2 outline-none'  />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2 '>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className='w-full px-4 p-2 border-2 outline-none resize-none' required  onChange={handleChange} value={formData.message}  ></textarea>
            </div>
            
            <button type='submit' className='w-full bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 p-1'>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
