import React from 'react'
import Featured from '../pages/Featured'
import Intro from '../pages/Intro'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Loader from '../components/Loader'


const Home = () => {
  return (
    <section>
      <Intro />
      <Featured />
      <About />
      <Contact />
      <Loader/>
    </section>
  )
}

export default Home
