import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from '../Products.js/Products'
import Product from '../Products.js/Product'
import Cart from '../Cart/Cart'

function RoutesComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path='/products' element={<Products />} />
           
            {/* dynamic routing */}
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          
        </Routes>
    </div>
  )
}

export default RoutesComp