import React from 'react'
import './App.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Staff from './Staff'
import Contact from './Contact'
import Plans from './Plans'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<div id='home'><Home id='home' /></div>} />
        <Route path='/staff' exact element={<Staff />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/plans' exact element={<Plans />} />
      </Routes>
    </Router>
  )
}


export default App
