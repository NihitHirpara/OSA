import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import Products from '../../Products'
import Contact from '../../Contact'
import SingleProduct from '../../SingleProduct'
import Cart from '../../Cart'
import Reset from '../auth/Reset'
import ErrorPage from '../../ErrorPage'
import Shopping from '../Shopping'
import Creditcard from '../Creditcard'
import ProtectedRoute from './ProtectedRoute'


function Component() {
  return (
    <>
      <ProtectedRoute>
        <Routes>
            <Route path="/" element={<Home />}/>
             {/* <Route path="/about" element={<About />} />  */}
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/creditcard" element={<Creditcard />} />
        </Routes>
        </ProtectedRoute>
    </>
  )
}

export default Component