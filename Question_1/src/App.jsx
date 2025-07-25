import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Sneakers", category: "Clothing", price: 150, inStock: true },
  { id: 2, name: "Black/Blue Jeans", category: "Clothing", price: 300, inStock: false },
  { id: 3, name: "Blouse", category: "Shoes", price: 500, inStock: true },
  { id: 4, name: "Wireless/ Mouse", category: "Accessories", price: 250, inStock: true },
  { id: 5, name: "Study desk", category: "Furniture", price: 14300, inStock: false },
  { id: 6, name: "Filing Cabinet", category: "Furniture", price: 14300, inStock: false },
  { id: 7, name: "Earrings", category: "Accessories", price: 120, inStock: true },
  { id: 8, name: "Pens", category: "Stationery", price: 450, inStock: false },
  { id: 9, name: "Notebookss", category: "Stationery", price: 180, inStock: true },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesStock = !showInStockOnly || product.inStock;

    return matchesName && matchesCategory && matchesStock;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h1>ShopEasy Product Catalogue</h1>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
