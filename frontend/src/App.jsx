import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import PlaceOreder from './pages/PlaceOreder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:productId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Orders/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/PlaceOrder' element={<PlaceOreder/>}/>
        
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
