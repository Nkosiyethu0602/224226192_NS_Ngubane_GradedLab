import React from "react";

const SearchBar = ({
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
  showInStockOnly,
  setShowInStockOnly,
}) => {
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleStockChange = () => setShowInStockOnly(prev => !prev);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={handleSearchChange}
        style={{ padding: "8px", marginRight: "10px", width: "250px" }}
      />

      <select value={selectedCategory} onChange={handleCategoryChange} style={{ padding: "8px", marginRight: "10px" }}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
      </select>

      <label>
        <input type="checkbox" checked={showInStockOnly} onChange={handleStockChange} />
        {" "}In Stock Only
      </label>
    </div>
  );
};

export default SearchBar;
