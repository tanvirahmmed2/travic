import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Member = () => {
    const { messages } = useContext(ThemeContext)
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
                        messages.length>0 ? messages.map((e) => {
                            const { name, email, _id, message } = e
                            return <div key={_id} className='w-full flex flex-row items-center justify-between  gap-2 border-b-2 py-2'>
                                <p className='w-full'>{name}</p>
                                <p className='w-full'>{message}</p>
                                <p className='w-full'>{email}</p>
                                <button className='w-full'>Action</button>
                            </div>
                        }): <p>No message found</p>
                    }
                </div>
                <div>
                    
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Member
