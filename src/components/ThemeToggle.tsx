
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-greenprimary-light dark:bg-greenprimary-dark text-greenprimary-dark dark:text-greenprimary-light hover:bg-orangeaccent-light dark:hover:bg-orangeaccent-dark transition-colors duration-200"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-orangeaccent" />
      ) : (
        <Moon size={20} className="text-greenprimary-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
