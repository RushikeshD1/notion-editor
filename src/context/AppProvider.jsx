import React, { createContext, useEffect, useState } from 'react'

export const AppContext= createContext();

const AppProvider  = ({children}) => {
  const [pages, setPages] = useState([]);
  const [theme, setTheme] = useState("light");
  const [selectedPage, setSelectedPage] = useState(pages[0] || null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedPage = JSON.parse(localStorage.getItem("pages")) || []
    const selectedPageNo = JSON.parse(localStorage.getItem("selectedPage")) || null
    setPages(storedPage)
    setSelectedPage(selectedPageNo)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) localStorage.setItem("pages", JSON.stringify(pages))
      
  }, [pages, isLoaded]);

  useEffect(() => {
    localStorage.setItem("selectedPage", JSON.stringify(selectedPage))
    
    if (!selectedPage && pages?.length) {
      setSelectedPage(pages[0]);
    }
  }, [pages, selectedPage]);



  return (
    <AppContext.Provider value={{pages, setPages, selectedPage, setSelectedPage, theme, setTheme}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider 