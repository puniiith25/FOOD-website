import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LogInForm from './Components/LogInForm/LogInForm'
import Cart from './Pages/Cart/Cart'

const App = () => {
  const [ShowLogin, setShowlogin] = useState(false)
  return (
    <>
      {ShowLogin ? <LogInForm setShowlogin={setShowlogin} /> : <></>}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>

          {/* ROUTE Paths */}
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
