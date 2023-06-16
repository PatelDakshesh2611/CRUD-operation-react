import React from 'react'
import Home from './Home';
import Component1 from './Component1'
import Navbar from './Navbar';
import Update from './Update'
import Insert from './Insert';
import { Routes, Route } from "react-router-dom";


const App = () => {
 
  return (
    <div>
      <  Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/data' element={<Component1/>}>  </Route>
      <Route path='/insert' element={<Insert/>}></Route>
      <Route path='/Update/:id' element={<Update/>}> </Route>
     </Routes>
    </div>
  )
}

export default App
