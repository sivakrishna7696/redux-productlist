import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
  const cartData = useSelector((state)=>state.productsData.cartData);
  // console.log(cartData)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link" href="#">Products</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link" href="#" >Cart 
          <i class="bi bi-cart"></i>
          <sup className='text-white'>{cartData.length}</sup>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header