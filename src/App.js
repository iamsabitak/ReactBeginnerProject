// import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homes from './components/Homes'
import About from './components/About'
import Contact from './components/Contact'
import Teams from './components/Teams'
import Navbar  from './components/Navbar'
import StatesandOthers from './components/StatesandOthers'

const App = () => {


  return (
    <>
    <Router>
    <Navbar />
    <Routes>
<Route path='/' element={<Homes/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/teams' element={<Teams/>}/>
</Routes>

</Router>
    
    {/* <StatesandOthers/> */}
   </>
  )
}

export default App
