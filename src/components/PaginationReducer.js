import { useEffect } from "react";
import { useReducer } from "react";

const itemPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export const PaginationReducer = () => {
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: 0,
  });

  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]);

  const startIndex = (paginationState.currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayItems = data.slice(startIndex, endIndex);
  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {displayItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        <button
          disabled={paginationState.currentPage === 1}
          onClick={() =>
            dispatch({
              type: "SET_CURRENT_PAGE",
              payload: paginationState.currentPage - 1,
            })
          }
        >
          Previous
        </button>
        <button
          disabled={endIndex >= data.length}
          onClick={() =>
            dispatch({
              type: "SET_CURRENT_PAGE",
              payload: paginationState.currentPage + 1,
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
