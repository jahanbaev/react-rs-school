import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const storedSearchValue = localStorage.getItem('searchValue');
    if (storedSearchValue) {
      setSearchValue(storedSearchValue);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;