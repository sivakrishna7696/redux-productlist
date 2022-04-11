import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const cartData = useSelector((state)=>state.productsData.cartData);
    console.log(cartData);

  return (
    <div>
        <h2>Cart Data</h2>
        <div class="container">
            {cartData && cartData.length>0 && cartData.map((product)=>(
                <div class="row border border-warning mt-4">
                    <div className="col-md-3">
                        <img src={product.image} className="w-100" alt={product.title} />
                    </div>
                    <div className="col-md-9">
                        <h2 className='mt-4'>{product.title}</h2>
                        <h4 className='mt-4'>{product.category}</h4>
                        <p className='mt-4'>{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Cart