import React, { useEffect, useState } from 'react'
import Productcart from "../../Component/ProductCart/ProductCart"
import './Product.css'

function Product() {
  const [products, setProducts] = useState([])

  function fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="product-container">
      {products.map((prod) => {
        return (
          <Productcart
            key={prod.id}
            title={prod.title}
            image={prod.image}
            rate={prod.rating.rate}
            count={prod.rating.count}
            price={prod.price}
          />
        )
      })}
    </div>
  )
}

export default Product