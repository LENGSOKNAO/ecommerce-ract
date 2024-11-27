import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to track the quantity of the product
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return; // Check if product is available

    const newProduct = {
      ...product,
      quantity, // Add the selected quantity
    };

    // Fetch the existing cart from localStorage or create a new one
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = storedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      storedCart[existingProductIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      storedCart.push(newProduct);
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(storedCart));

    // Navigate to the "Out" (checkout) page
    navigate("/out"); // Programmatically navigate to the /out page
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">Home</Link>
                <span>{product.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details spad">
        <div className="container">
          <div className="row">
            {/* Product Image */}
            <div className="col-lg-6">
              <div className="product__details__pic">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  {product.title}
                  <span>Brand: {product.category}</span>
                </h3>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                  <span> (138 reviews)</span>
                </div>
                <div className="product__details__price">${product.price}</div>
                <p>{product.description}</p>

                {/* Add to Cart */}
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="cart-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(); // Call addToCart when the "Add to cart" button is clicked
                    }}
                  >
                    Add to Cart
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_adjust-horiz"></span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Availability, Colors, Sizes */}
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label>
                          In Stock
                          <input type="checkbox" checked readOnly />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label>
                          <input type="radio" name="color" defaultChecked />
                          <span
                            className="checkmark"
                            style={{ backgroundColor: "red" }}
                          ></span>
                        </label>
                        <label>
                          <input type="radio" name="color" />
                          <span
                            className="checkmark"
                            style={{ backgroundColor: "black" }}
                          ></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label className="active">
                          <input type="radio" name="size" />S
                        </label>
                        <label>
                          <input type="radio" name="size" />M
                        </label>
                        <label>
                          <input type="radio" name="size" />L
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Specification
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    Reviews (2)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <h6>Description</h6>
                  <p>{product.description}</p>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <h6>Specification</h6>
                  <p>Details about the product specifications go here.</p>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <h6>Reviews</h6>
                  <p>No reviews available yet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
