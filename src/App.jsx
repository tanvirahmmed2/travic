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
import Book from './user/Book'

const App = () => {
  return (
    <div className='w-full relative overflow-x-hidden'  >
      <Navbar />
      <Sidebar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>




          <Route path='/book' element={<Book/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/*' element={<Error/>}/>
          

        </Routes>
      </div>
      <img src={bgImage} alt="" className='w-full h-screen object-cover fixed -z-50'/>
      <Footer />

    </div>
  )
}

export default App
