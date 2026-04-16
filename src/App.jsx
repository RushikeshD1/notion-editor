import React from 'react'
import Layout from './components/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AppProvider from './context/AppProvider '

const App = () => {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App