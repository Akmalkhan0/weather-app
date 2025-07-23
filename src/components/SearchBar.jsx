import React, { useState } from 'react';

function SearchBar({ onSearch, city, setCity }) {
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;