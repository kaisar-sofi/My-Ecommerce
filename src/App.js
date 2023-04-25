import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import SinglePage from "./pages/SinglePage"
import Product from "./pages/Product"
import Error from "./pages/Error"
import About from "./pages/About"
import Cart  from "./pages/Cart"
import Header from './components/Header';

function App() {
  
  return (
    <div className='w-full h-screen'>
    <Header/>

      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/product'element={<Product/>}></Route>
        <Route path='/singlepage:/id'element={<SinglePage/>}></Route>
        <Route path='*'element={<Error/>}></Route>
      </Routes>
 
    </div>
  )
}

export default App;
