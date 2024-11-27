import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch products from the Fake Store API
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

 

  // Handle increasing the quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Handle adding to cart (dummy implementation)
  const addToCart = () => {
    alert(`Added ${quantity} of ${selectedProduct.title} to cart.`);
    setSelectedProduct(null); // Optionally deselect after adding to cart
    setQuantity(1); // Reset quantity
  };

  // Loading and error handling
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fake Store Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3 style={{ fontSize: "16px" }}>{product.title}</h3>
            <p>${product.price}</p>
            <button
              style={{
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedProduct(product)} // Select the product
            >
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Selected Product Details */}
      {selectedProduct && (
        <>
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <h2>Selected Product Details</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div>
                <h3>{selectedProduct.title}</h3>
                <p>Category: {selectedProduct.category}</p>
                <p>${selectedProduct.price}</p>
                <p>Rating: {selectedProduct.rating.rate} / 5</p>
                <p>Reviews: {selectedProduct.rating.count}</p>
              </div>
            </div>
          </div>

          {/* Control Panel for Selected Product */}
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#eef2f3",
            }}
          >
            <h3>Manage Product</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "green",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span style={{ fontSize: "18px" }}>{quantity}</span>
              <button
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "green",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={increaseQuantity}
              >
                +
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  background: "blue",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Data;
