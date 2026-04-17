import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'

const Navbar = () => {

  const {theme} = useContext(AppContext);

  return (
    <div className={`flex px-8 py-2 ${theme === "light" ? "bg-gray-200" : "bg-gray-900 text-white"} items-center justify-center`}>
        <h2 className='text-2xl font-semibold text-center '>Notion Editor</h2>
    </div>
  )
}

export default Navbar