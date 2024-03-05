import { useTheme } from "../context/ThemeContext";

const SwitchTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Change Theme of the App</h1>
      <div>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
