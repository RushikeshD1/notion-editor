import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppProvider';
import Topbar from '../components/Topbar';

const Home = () => {
  
  const {theme, selectedPage, pages, setSelectedPage} = useContext(AppContext);
  
  return (
    <div className={`${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-500 text-white"}`}>
      {/* Top Bar */}
      <Topbar />
    </div>
  )
}

export default Home