import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from '../Products.js/Products'
import Product from '../Products.js/Product'

function RoutesComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path='/products' element={<Products />} />
           
            {/* dynamic routing */}
            <Route path="/products/:id" element={<Product />} />
        </Routes>
    </div>
  )
}

export default RoutesComp