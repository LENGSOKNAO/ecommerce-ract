import React, { useEffect, useState } from "react";
import { BsBackpack4 } from "react-icons/bs";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdOutlineStarBorder } from "react-icons/md";

const SingleProduct = () => {
  const [product, setProduct] = useState(null); // To store the single product
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch a specific product from the Fake Store API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const singleProduct = response.data.find(
          (item) => item.category === "men's clothing" // Adjust as needed
        ); // Get a single product from "Men's Clothing" category
        setProduct(singleProduct);
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <h2></h2>;
  if (error) return <h2>{error}</h2>;

  if (!product) return <h2>No product found</h2>;

  return (
    <div className="container">
      <div className="single-product">
        <div className="product__item">
          <div className="product__item__pic">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "auto" }}
            />
            <ul className="product__hover">
              <li>
                <a href={product.image} className="image-popup">
                  <span>
                    <CgArrowsExpandRight />
                  </span>
                </a>
              </li>
              <li>
                <a href={product.title}>
                  <span>
                    <FaRegHeart />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <BsBackpack4 />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="product__item__text">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p className="product__price">
              <strong>${product.price}</strong>
            </p>
            <div className="rating">
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
