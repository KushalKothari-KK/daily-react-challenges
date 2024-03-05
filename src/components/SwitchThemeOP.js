import { useTheme } from "../context/ThemeContext";
import "../styles/SwitchTheme.css";
const SwitchThemeOP = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  return (
    <div className={`container ${themeClass}`}>This is example of Theme</div>
  );
};

export default SwitchThemeOP;
