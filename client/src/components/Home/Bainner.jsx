import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          {/* Large Category Item */}
          <div className="col-lg-6 p-0">
            <div
              className="categories__item categories__large__item"
              style={{
                backgroundImage: `url(${
                  products[0]?.image || "default-image.jpg"
                })`, // Dynamically set background
              }}
            >
              <div className="categories__text">
                <h1>{products[0].title}</h1>
                <p style={{ color: "#EC6F6F" }}>
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Pen-disse
                  ultrices gravida.
                </p>
                <a style={{ color: "#EC6F6F" }}>Shop now</a>
              </div>
            </div>
          </div>
          {/* Small Category Items */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${
                      products[0]?.image || "default-image.jpg"
                    })`,
                  }}
                >
                  <div className="categories__text">
                    <h4 style={{ color: "#EC6F6F" }} >{products[0].title}</h4>
                    <p >358 items</p>
                    <Link to='/' style={{ color: "#CA3CFF" }}>Shop now</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${
                      products[2]?.image || "default-image.jpg"
                    })`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Kid’s fashion</h4>
                    <p>273 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${
                      products[6]?.image || "default-image.jpg"
                    })`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${
                      products[7]?.image || "default-image.jpg"
                    })`,
                  }}
                >
                  <div className="categories__text">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
