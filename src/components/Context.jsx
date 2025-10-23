import React, { createContext } from 'react'


export const ThemeContext= createContext()



const ContextProvider = ({children}) => {




  const ContextValue={

  }

  
  return <ThemeContext.Provider value={ContextValue}>
    {children}
  </ThemeContext.Provider>
}

export default ContextProvider
