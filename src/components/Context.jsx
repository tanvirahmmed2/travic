import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const ThemeContext = createContext()



const ContextProvider = ({ children }) => {
  const api = 'http://localhost:5000/api'


  const [loader, setLoader] = useState(true)
  const [menu, setMenu] = useState(false)
  const [tours, setTours] = useState([])
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])




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
      const response = await axios.get(`${api}/user/protected`, { withCredentials: true })
      if (!response.data.success) {
        console.log(response)
        setUser(null)
        setIsAdmin(false)
      } else {
        const user = response.data.payload
        setUser(user)
        setIsAdmin(user.role === 'admin')
      }
    } catch (error) {
      console.log(error)
      setUser(null)
      setIsAdmin(false)
    }
  }
  fetchUser()
}, [])


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${api}/blog`, { withCredentials: true })
        setBlogs(response.data.payload)
      } catch (error) {
        console.log(error.response)

      }

    }
    fetchBlogs()
  }, [])



  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${api}/tour`, { withCredentials: true })
        setTours(response.data.payload)
      } catch (error) {
        console.log(error.response)

      }

    }
    fetchTours()
  }, [])



  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${api}/message`, { withCredentials: true })
        setMessages(response.data.payload)
      } catch (error) {
        console.log(error.response)

      }

    }
    fetchMessages()
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
