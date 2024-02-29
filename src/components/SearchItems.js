import React, { useState } from "react";
import { ITEMS } from "../utils/constant";

const SearchItems = () => {
  const [inputValue, setInputValue] = useState("");
  const [SearchList, setSearchList] = useState([]);
  const handleFilterList = () => {
    const filterItems = ITEMS.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchList(filterItems);
  };
  return (
    <div>
      <h1>Search Item</h1>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleFilterList}>Search</button>
      <ul>
        {SearchList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
