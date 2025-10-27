import React from 'react'
import { Routes, Route } from 'react-router-dom'
import bgImage from './data/background.jpg'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import Error from './pages/Error'
import Login from './user/Login'
import Register from './user/Register'
import Tours from './pages/Tours'
import Tour from './components/Tour'
import Contact from './pages/Contact'
import Recover from './user/Recover'
import Blogs from './pages/Blogs'
import Blog from './components/Blog'
import Notification from './components/Notification'
import { useContext } from 'react'
import { ThemeContext } from './components/Context'
import Loader from './components/Loader'
import Profile from './user/Profile'
import Saved from './pages/Saved'
import Purchased from './pages/Purchased'
import ProtectedUser from './components/ProtectedUser'

const App = () => {
  const { loader } = useContext(ThemeContext)
  if (loader) return <Loader />
  return (
    <div className='w-full relative overflow-x-hidden'  >
      <Navbar />
      <Sidebar />
      <Notification />
      <div className='w-full min-h-[800px] flex items-center justify-center mt-14'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProtectedUser><Profile /></ProtectedUser>} />
          <Route path='/saved' element={<ProtectedUser><Saved/></ProtectedUser>} />
          <Route path='/purchased' element={<ProtectedUser><Purchased /></ProtectedUser>} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/tours/:title' element={<Tour />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recovery' element={<Recover />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:title' element={<Blog />} />
          <Route path='/*' element={<Error />} />


        </Routes>
      </div>
      <img src={bgImage} alt="" className='w-full h-screen object-cover fixed top-0 left-0 -z-50' />
      <Footer />

    </div>
  )
}

export default App
