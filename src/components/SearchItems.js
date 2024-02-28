import React, { useState } from "react";
const items = [
  "Item 1",
  "Another Item 2",
  "New Item 3",
  "Something Item",
  "Item 4",
];
const SearchItems = () => {
  const [inputValue, setInputValue] = useState("");
  const [SearchList, setSearchList] = useState([]);
  const handleFilterList = () => {
    const filterItems = items.filter((item) =>
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
