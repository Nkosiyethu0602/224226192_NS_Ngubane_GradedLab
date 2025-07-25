import React from "react";

const ProductItem = ({ product }) => {
  return (
    <li
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: product.inStock ? "#f0f18aff" : "#ece446ff",
      }}
    >
      <strong>{product.name}</strong> <br />
      Category: {product.category} <br />
      Price: R{product.price} <br />
      <span style={{ color: product.inStock ? "green" : "red" }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </li>
  );
};

export default ProductItem;