import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { MdDelete } from "react-icons/md";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Out = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle form submission

  // Form state for billing details
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const cartTotal = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, []);

  const updateTotal = (items) => {
    const cartTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  };

  const deleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    updateTotal(updatedCartItems);
  };

  const increaseProductQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    updateTotal(updatedCartItems);
  };

  const decreaseProductQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    updateTotal(updatedCartItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate only the form fields (firstName, lastName, etc.)
    const isFormValid = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (isFormValid) {
      setIsSubmitted(true);
      alert("Order placed successfully!");
    } else {
      // Alert only if the form is not valid (fields not filled out)
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Layout>
      <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="coupon__link">
                <span className="icon_tag_alt"></span>{" "}
                <a href="#">Have a coupon?</a> Click here to enter your code.
              </h6>
            </div>
          </div>
          {isSubmitted ? ( // Thank you message
            <div className="thank-you-message">
              <h2>Thank you for your order!</h2>
              <p>Your order has been placed successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="checkout__form">
              <div className="row">
                <div className="col-lg-8">
                  <h5>Billing detail</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="checkout__form__input">
                        <p>
                          First Name <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="checkout__form__input">
                        <p>
                          Last Name <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="checkout__form__input">
                        <p>
                          Country <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="checkout__form__input">
                        <p>
                          Address <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                        />
                      </div>
                      <div className="checkout__form__input">
                        <p>
                          Town/City <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="checkout__form__input">
                        <p>
                          Country/State <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="checkout__form__input">
                        <p>
                          Postcode/Zip <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="checkout__form__input">
                        <p>
                          Phone <span>*</span>
                        </p>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="checkout__form__input">
                        <p>
                          Email <span>*</span>
                        </p>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="checkout__order">
                    <h5>Your order</h5>
                    <div className="checkout__order__product">
                      <ul>
                        <li>
                          <span className="top__text">Product</span>
                          <span className="top__text__right">Total</span>
                        </li>
                        {cartItems.length === 0 ? (
                          <li>Your cart is empty</li>
                        ) : (
                          cartItems.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <div>
                                <strong>{item.title}</strong> <br />
                                <span style={{ marginLeft: "10px" }}>
                                  $ {item.price} x {item.quantity} <br />
                                  Total: ${item.price * item.quantity}
                                </span>
                                <span></span>{" "}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  alignItems: "center",
                                }}
                              >
                                <button
                                  onClick={() => deleteItem(index)}
                                  style={{
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    background: "#e74c3c",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                  }}
                                >
                                  <MdDelete />
                                </button>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                    <div className="checkout__order__total">
                      <ul>
                        <li>
                          Subtotal <span>${total.toFixed(2)}</span>
                        </li>
                        <li>
                          Total <span>${total.toFixed(2)}</span>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="site-btn"
                      style={{ marginBottom: "15px", borderRadius: "5px" }}
                    >
                      Place order
                    </button>
                    {/* PayPal button */}
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "ATS18TUzNjw18QgKBX5-QSmzzTt1nkFJKxO5h46YHTy3imHPBTFoVfTV5nsJ-Q19R_8x-0dqXENRXuc1", // Replace with your client ID
                        currency: "USD", // Optional: set your currency
                      }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical" }} // Optional: button style
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: total.toFixed(2),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then(() => {
                            alert("Payment successful!");
                            setIsSubmitted(true);
                          });
                        }}
                        onError={(err) => {
                          console.error("PayPal Button Error", err);
                          alert(
                            "There was an issue with your payment. Please try again."
                          );
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Out;
