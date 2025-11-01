import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { tourData } from '../data/tours'
import { blogsData } from '../data/blogs'


export const ThemeContext = createContext()



const ContextProvider = ({ children }) => {
  const api = 'http://localhost:5000/api'


  const [loader, setLoader] = useState(true)
  const [menu, setMenu] = useState(false)
  const [tours, setTours] = useState(tourData)
  const [blogs, setBlogs] = useState(blogsData)
  const [notification, setNotification] = useState(null)
  const [user, setUser] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [messages, setMessages]= useState([])
  const [users, setUsers]= useState([])




  useEffect(() => {
    const fetchServer = async () => {
      try {
        const response = await axios.get(`${api}`, { withCredentials: true })
        if (response.data.success) {
          setLoader(false)
        } else {
          setLoader(true)
        }
      } catch (error) {
        setLoader(true)
        setNotification('Failed to run website')
      }
    }
    fetchServer()

  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const reponse = await axios.get(`${api}/user/protected`, { withCredentials: true })
        if (!reponse.data.success) {
          console.log(reponse)
        } else {
          const user = reponse.data.payload
          setUser(user)
          if (user.role === 'admin') {
            setIsAdmin(true)
          }
        }
      } catch (error) {
        console.log(error)
        setUser(null)
        setIsAdmin(false)
      }
    }
    fetchUser()
  }, [])




  const ContextValue = {
    loader, setLoader,
    menu, setMenu,
    tours, setTours,
    blogs, setBlogs,
    notification, setNotification,
    api,
    user, setUser,
    isAdmin, setIsAdmin,
    messages, setMessages,
    users, setUsers

  }


  return <ThemeContext.Provider value={ContextValue}>
    {children}
  </ThemeContext.Provider>
}

export default ContextProvider
