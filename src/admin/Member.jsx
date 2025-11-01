import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { ThemeContext } from '../components/Context'

const Member = () => {
    const { messages, users, setUsers, api, setNotification } = useContext(ThemeContext)

    useEffect(()=>{
       const  fetchUser=async()=>{
            try {
                const response= await axios.get(`${api}/user`, {withCredentials: true})
               
                setUsers(response.data.payload)
            } catch (error) {
                setNotification('Failed to fetch user')
            }
        }
        fetchUser()
        
    },[setNotification])


    return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <div className='w-full flex flex-col items-center justify-center gap-4 bg-white p-2 rounded-lg py-4'>
                <h1>Messages</h1>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <div className='w-full flex flex-row items-center justify-between  gap-2 border-b-2 py-2'>
                        <p className='w-full'>Name</p>
                        <p className='w-full'>Message</p>
                        <p className='w-full'>Email</p>
                        <p className='w-full'>Action</p>
                    </div>
                    {
                        messages.length > 0 ? messages.map((e) => {
                            const { name, email, _id, message } = e
                            return <div key={_id} className='w-full flex flex-row items-center justify-between  gap-2 border-b-2 py-2'>
                                <p className='w-full'>{name}</p>
                                <p className='w-full'>{message}</p>
                                <p className='w-full'>{email}</p>
                                <button className='w-full'>Action</button>
                            </div>
                        }) : <p>No message found</p>
                    }
                </div>
                
            </div>
            <div className='w-full flex flex-col gap4 items-center justify-center bg-white py-4 rounded-lg'>
                    <div className=' flex flex-row items-center justify-center gap-2'>
                        <h1>Total website user:</h1>
                        {
                            users.length > 0 ? <p>
                                   {users.length}
                            </p> : <p>No user found</p>
                        }
                    </div>
                    <div className='w-[300px] flex flex-col items-center justify-center gap-4'>
                        <h1>Ban user</h1>
                        <form className='w-full flex flex-col gap-3'>
                            <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="email">Email</label>
                                <input type="email"  name='email' id='email' required  className='w-full border-2 outline-none' />
                            </div>
                            <button className='w-full border-2'>Request</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Member
