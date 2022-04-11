import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/ActionCreators';
import { useDispatch } from 'react-redux'

function Product() {
  const dispatch = useDispatch()
  
const [product,setProduct] = useState({});

const getTheSingleProduct = async()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`) 
    console.log(data)
    setProduct(data);
}

  const handleClick  = (product)=>{
    dispatch(addToCart(product));
    console.log(product);
  }

  useEffect(()=>{
    getTheSingleProduct();
  },[])

  const {id} = useParams()
  console.log(id);

  return (
    <div>
        <h2>Product</h2>
        <div className="container">
            {
              Object.keys(product).length>0 ? (
              <div class="row border border-primary mt-2">
                  <div className='col-md-6'>
                    <img src={product.image} className="w-100" />
                  </div>
                  <div className='col-md-6'>
                    <div className='mt-3'>
                        <h2 className='p-2'>{product.title}</h2>
                        <div className='productprice'>
                            <span className='bg-info text-light p-3'>Price: ${product.price}</span>
                        </div>
                        <div className='mt-4'>
                            <h2>category : {product.category}</h2>
                        </div>
                        <div  className='mt-4'>
                            <p>description : {product.description}</p>
                        </div>
                        <div>
                          <button className='btn btn-info px-3 py-2' onClick={()=>handleClick(product)}>Add to cart</button>
                        </div>
                    </div>
                  </div>
              </div>
              ):null}
        </div>
    </div>
  )
}

export default Product