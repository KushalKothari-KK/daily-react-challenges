import React, { useState } from "react";
import { ITEMS, ITEMS_PER_PAGE } from "../utils/constant";

const Pagination = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const indexOfLastItem = currentPageNumber * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = ITEMS.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(ITEMS.length / ITEMS_PER_PAGE); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {pageNumber.map((number) => (
        <button key={number} onClick={() => setCurrentPageNumber(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
