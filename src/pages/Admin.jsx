import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Member from '../admin/Member'
import Access from '../admin/Access'
import Blog from '../admin/Blog'
import Tour from '../admin/Tour'


const Admin = () => {
    const { title } = useParams()
    return (
        <section className='w-full min-h-[800px] p-4'>
            <h1 className='text-2xl font-semibold text-center'>Welcome to Admin Dashboard</h1>
            <div className='w-full md:w-3/4 flex flex-row items-center justify-center gap-3'>
                <Link className='' to='/admin/member'>Member</Link>
                <Link className='' to='/admin/tour'>Tour</Link>
                <Link className='' to='/admin/blog'>Blog</Link>
                <Link className='' to='/admin/access'>Access</Link>
            </div>
            <div>
                {title === 'member' && <Member />}
                {title === 'tour' && <Tour />}
                {title === 'blog' && <Blog />}
                {title === 'access' && <Access />}
            </div>
        </section>
    )
}

export default Admin
