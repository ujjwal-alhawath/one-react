import { useState } from 'react'  
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import './styles/app.scss'
import'./styles/header.scss'
import'./styles/home.scss'
import Home from './components/home'
import contact from './components/contact'
import'./styles/contact.scss'
import Services from './components/service'
import'./styles/service.scss'
import './styles/mediaqueary.scss'


function App() {

  return (
   <Router>
    <Header/>
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/services" element={<Services />} />
    </Routes>
   </Router>
    
  )
}

export default App
