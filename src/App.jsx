import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AppProvider from './context/AppProvider'
import Layout from './components/Layout'
import Home from './pages/Home'

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