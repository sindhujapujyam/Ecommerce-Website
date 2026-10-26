import React from 'react'
import './ProductCart.css'

function Productcart({ title, image, rate, count, price }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>

      <div className="rating">
        <span className="stars">★★★★☆</span>
        <span className="rate">{rate}</span>
        <span className="count">({count})</span>
      </div>

      <div className="price">
        ${price}
      </div>

      <button className="cart-button">
        Add to Cart
      </button>

    </div>
  )
}

export default Productcart