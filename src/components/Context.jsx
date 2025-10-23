import React, { createContext, useState } from 'react'


export const ThemeContext= createContext()



const ContextProvider = ({children}) => {

  const [menu, setMenu]= useState(false)



  const ContextValue={
    menu, setMenu,

  }

  
  return <ThemeContext.Provider value={ContextValue}>
    {children}
  </ThemeContext.Provider>
}

export default ContextProvider
