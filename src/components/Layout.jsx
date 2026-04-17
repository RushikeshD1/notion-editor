import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='flex h-screen flex-col'>
        <Navbar />
        <div className='flex flex-1'>
            <Sidebar />
            <div className='flex-1'>
                <Outlet />
            </div>            
        </div>        
    </div>
  )
}

export default Layout