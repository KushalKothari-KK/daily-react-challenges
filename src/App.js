import { TranslationContext } from "./components/TranslationContext";
import { LocalizationProvider } from "./context/LocalizationContext";

function App() {
  return (
    <div className="App">
      <LocalizationProvider>
        <TranslationContext />
      </LocalizationProvider>
    </div>
  );
}

export default App;
