import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p style={{ color: "gray" }}>No products found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
