import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    // console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <div class="container py-5">
        <div class="row">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div className="col-md-3">
                <Link to={`/products/${product.id}`} className="text-decoration-none">
                  <div class="card">
                    <img src={product.image} class="card-img-top" alt={product.title} />
                    <div class="card-body">
                      <h5 class="card-title">{product.category}</h5>
                      
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Products;
