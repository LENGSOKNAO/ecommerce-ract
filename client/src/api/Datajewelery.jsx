import React, { useEffect, useState } from "react";
import { BsBackpack4 } from "react-icons/bs";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router";

const Datajewelery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const menProducts = response.data.filter(
          (product) => product.category === "jewelery"
        ); // Filter for "Men's" category
        setProducts(menProducts);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2></h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div class="col-lg-9 col-md-9">
      <div className="row">
        {products.map((product) => (
          <div class="col-lg-4 col-md-6">
            <div key={product.id} className="product__item">
              <div className="product__item__pic set-bg">
                <img
                  className="product__item__pic set-bg"
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
    </div>
  );
};

export default Datajewelery;
