import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, email or role"
      value={searchQuery}
      onChange={handleSearch}
      className="search-input"
    />
  );
};

export default SearchBar;
