import { ShoppingCartReducer } from "./components/ShoppingCartReducer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ShoppingCartReducer />
      </CartProvider>
    </div>
  );
}

export default App;
