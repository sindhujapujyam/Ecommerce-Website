import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'

import NavBar from './Component/NavBar/NavBar'

import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App