import { AuthContextPage } from "./components/AuthContextPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AuthContextPage />
      </AuthProvider>
    </div>
  );
}

export default App;
