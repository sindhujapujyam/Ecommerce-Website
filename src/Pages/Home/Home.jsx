import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div className="home">

      {/* HERO BANNER */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            TRENDING COLLECTION
          </p>

          <h1>
            Fashion That
            <br />
            <span>Defines You</span>
          </h1>

          <p className="hero-text">
            Discover the latest styles, amazing deals
            and everything you love in one place.
          </p>

          <div className="hero-offer">
            <strong>UP TO 70% OFF</strong>
            <span>Limited Time Offer</span>
          </div>

          <Link to="/product">
            <button className="hero-button">
              SHOP NOW
            </button>
          </Link>

        </div>


        <div className="hero-image">

          {products.length > 0 && (
            <img
              src={products[2].image}
              alt={products[2].title}
            />
          )}

          <div className="sale-badge">
            <strong>70%</strong>
            <span>OFF</span>
          </div>

        </div>

      </section>


      {/* SHOP BY CATEGORY */}

      <section className="category-section">

        <div className="section-title">
          <p>EXPLORE COLLECTIONS</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="categories">

          <div className="category-card">
            <div className="category-icon">👗</div>
            <h3>Women</h3>
            <p>Explore Now</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👔</div>
            <h3>Men</h3>
            <p>Explore Now</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👟</div>
            <h3>Footwear</h3>
            <p>Explore Now</p>
          </div>

          <div className="category-card">
            <div className="category-icon">💄</div>
            <h3>Beauty</h3>
            <p>Explore Now</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👜</div>
            <h3>Accessories</h3>
            <p>Explore Now</p>
          </div>

        </div>

      </section>


      {/* DEALS OF THE DAY */}

      <section className="deals-section">

        <div className="section-title">

          <p>DON'T MISS OUT</p>

          <h2>
            Deals of the Day
          </h2>

        </div>


        <div className="deal-products">

          {products.slice(0, 4).map((product, index) => (

            <Link
              to={`/product/${product.id}`}
              className="deal-card"
              key={product.id}
            >

              <div className="deal-discount">

                {index === 0 && "40% OFF"}
                {index === 1 && "30% OFF"}
                {index === 2 && "50% OFF"}
                {index === 3 && "25% OFF"}

              </div>


              <div className="deal-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>


              <div className="deal-info">

                <h3>
                  {product.title}
                </h3>


                <div className="deal-rating">

                  <span>★★★★★</span>

                  <small>
                    ({product.rating.count})
                  </small>

                </div>


                <div className="deal-price">

                  <strong>
                    ${product.price}
                  </strong>

                  <del>
                    ${(product.price * 1.3).toFixed(2)}
                  </del>

                </div>

              </div>


              <button className="view-button">
                VIEW PRODUCT
              </button>

            </Link>

          ))}

        </div>

      </section>


      {/* TRENDING SECTION */}

      <section className="trending-section">

        <div className="section-title">

          <p>WHAT'S HOT</p>

          <h2>
            Trending Now
          </h2>

        </div>


        <div className="trending-grid">

          {products.slice(4, 8).map((product) => (

            <Link
              to={`/product/${product.id}`}
              className="trending-card"
              key={product.id}
            >

              <div className="trending-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="trending-info">

                <h3>
                  {product.title}
                </h3>

                <p>
                  ${product.price}
                </p>

                <span>
                  Shop Now →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <div className="feature">

          <div className="feature-icon">
            🚚
          </div>

          <h3>
            Free Delivery
          </h3>

          <p>
            On selected orders
          </p>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🔒
          </div>

          <h3>
            Secure Payment
          </h3>

          <p>
            100% secure checkout
          </p>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🔄
          </div>

          <h3>
            Easy Returns
          </h3>

          <p>
            Simple return process
          </p>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🎧
          </div>

          <h3>
            24/7 Support
          </h3>

          <p>
            We're here to help
          </p>

        </div>

      </section>

    </div>
  )
}

export default Home