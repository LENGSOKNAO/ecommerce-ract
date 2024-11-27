import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const instagramImages = [
    "src/img/instagram/insta-1.jpg",
    "src/img/instagram/insta-2.jpg",
    "src/img/instagram/insta-3.jpg",
    "src/img/instagram/insta-4.jpg",
    "src/img/instagram/insta-5.jpg",
    "src/img/instagram/insta-6.jpg",
  ];

  return (
    <>
      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            {instagramImages.map((image, index) => (
              <div className="col-lg-2 col-md-4 col-sm-4 p-0" key={index}>
                <div
                  className="instagram__item"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram"></i>
                    <a href="#">@ashion_shop</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="./index.html">
                    <img src="src/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="footer__payment">
                  <a href="#">
                    <img src="src/img/payment/payment-1.png" alt="Payment" />
                  </a>
                  <a href="#">
                    <img src="src/img/payment/payment-2.png" alt="Payment" />
                  </a>
                  <a href="#">
                    <img src="src/img/payment/payment-3.png" alt="Payment" />
                  </a>
                  <a href="#">
                    <img src="src/img/payment/payment-4.png" alt="Payment" />
                  </a>
                  <a href="#">
                    <img src="src/img/payment/payment-5.png" alt="Payment" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy;{" "}
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
