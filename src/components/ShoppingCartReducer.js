//Implement a shopping cart uisng context and a reducer , feature add,remove,upadate,items in cart

import { useCart } from "../context/CartContext";

const productObj = [
  {
    id: "1",
    label: "MacBook M3",
  },
  {
    id: "2",
    label: "iPhone 15",
  },
  {
    id: "3",
    label: "macMini M3",
  },
];

export const ShoppingCartReducer = () => {
  const { cartState, cartDispatch } = useCart();
  const handleAddtoCart = (prod) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === prod.id
    );
    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: { id: prod.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...prod, quantity: 1 } });
    }
  };
  const handleUpdateQty = (id, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: { id, quantity },
      });
    }
  };
  const handleRemoveCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };
  return (
    <div>
      <h1>Shopping Cart Reducer</h1>
      {cartState?.cartItems?.length > 0 ? (
        <>
          <h2>Cart Items:</h2>
          <ul>
            {cartState?.cartItems?.map((item) => (
              <li key={item.id}>
                <span>{item.label} </span>
                <span>Quantity: {item.quantity} </span>
                <button
                  onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button onClick={() => handleRemoveCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <ul>
        {productObj.map((prod) => (
          <li key={prod.id}>
            <span>{prod.label} </span>
            <button onClick={() => handleAddtoCart(prod)}> Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
