import { useThemeContext } from "../theme/themeContext";

export const useThemeSwitcher = () => {
  const { theme, mode, toggleTheme, setTheme } = useThemeContext();
  return { theme, mode, toggleTheme, setTheme };
};
