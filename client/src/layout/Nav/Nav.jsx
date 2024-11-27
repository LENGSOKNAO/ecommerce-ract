import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsBackpack4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
 

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // if (loading) return <h2 className="loader"></h2>;
  // if (error) return <h2>{error}</h2>;

 

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src="src/img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/men">Men's Clothing</Link>
                </li>
                <li>
                  <Link to="/jewelery">Jewelery</Link>
                </li>
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
                <li>
                  <Link to="/women">Women's Clothing</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                <a href="#">Login</a>
                <a href="#">Register</a>
              </div>
              <ul className="header__right__widget">
                <li>
                  <IoIosSearch />
                </li>
                <li>
                  <a href="#">
                    <FaRegHeart />
                    <div className="tip">2</div>
                  </a>
                </li>
                <li>
                  <Link to="/out">
                    <BsBackpack4 />
                    <div className="tip">{getTotalItems()}</div>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="canvas__open"></div>
      </div>
    </header>
  );
};

export default Nav;
