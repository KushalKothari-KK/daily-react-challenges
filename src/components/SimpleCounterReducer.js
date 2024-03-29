import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "Decrement":
      return {
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case "Reset":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const SimpleCounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state.count);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count:{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SimpleCounterReducer;
