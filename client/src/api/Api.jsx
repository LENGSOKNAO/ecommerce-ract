import React, { useEffect, useState } from "react";
import { BsBackpack4 } from "react-icons/bs";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // To store the original list of products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All"); // Track active category

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setAllProducts(response.data);  

        const productCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(productCategories);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2 className="loader"></h2>;
  if (error) return <h2>{error}</h2>;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);  
    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);  
    }
  };

  return (
    <div className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              <li
                className={activeCategory === "All" ? "active" : ""}
                onClick={() => handleCategoryClick("All")}
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row property__gallery">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 mix women"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product__item">
                <div className="product__item__pic set-bg">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={product.image}
                    alt={product.title}
                  />
                  <ul className="product__hover">
                    <li>
                      <Link className="image-popup">
                        <span>
                          <CgArrowsExpandRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <FaRegHeart />
                        </span>
                      </a>
                    </li>
                    <li>
                      <Link to={`/page/${product.id}`}>
                        <span>
                          <BsBackpack4 />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="product__item__text">
                  <h6>{product.title}</h6>
                  <div className="rating">
                    <MdOutlineStarBorder />
                    <MdOutlineStarBorder />
                    <MdOutlineStarBorder />
                    <MdOutlineStarBorder />
                    <MdOutlineStarBorder />
                  </div>
                  <p className="product__price">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display selected product details */}
        {selectedProduct && (
          <div className="product-details">
            <h3>Product Details</h3>
            <img
              style={{ width: "200px", height: "200px" }}
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <h4>{selectedProduct.title}</h4>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Price: ${selectedProduct.price}</strong>
            </p>
            <div className="rating">
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
              <MdOutlineStarBorder />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Api;
