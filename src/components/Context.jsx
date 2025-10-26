import React, { createContext, useState } from 'react'
import { tourData } from '../data/tours'
import { blogsData } from '../data/blogs'


export const ThemeContext= createContext()



const ContextProvider = ({children}) => {

  const [menu, setMenu]= useState(false)
  const [tours, setTours]= useState(tourData)
  const [blogs, setBlogs]= useState(blogsData)



  const ContextValue={
    menu, setMenu,
    tours, setTours,
    blogs, setBlogs

  }

  
  return <ThemeContext.Provider value={ContextValue}>
    {children}
  </ThemeContext.Provider>
}

export default ContextProvider
