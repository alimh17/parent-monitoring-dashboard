import { ThemeOptions, createTheme } from "@mui/material/styles";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#f5f5f5", paper: "#fff" },
    text: { primary: "#000", secondary: "#555" },
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1d1d1d" },
    text: { primary: "#fff", secondary: "#aaa" },
  },
};

export const customThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: { main: "#00bfa5" }, // teal green accent
    secondary: { main: "#ff9100" }, // amber accent
    background: { default: "#f0f2f5", paper: "#ffffff" },
    text: { primary: "#1a1a1a", secondary: "#424242" },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h6: { fontWeight: 700, letterSpacing: "0.02em" },
    body1: { fontSize: "0.95rem" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
};

export const getAppTheme = (mode: "light" | "dark" | "custom") => {
  switch (mode) {
    case "dark":
      return createTheme(darkThemeOptions);
    case "custom":
      return createTheme(customThemeOptions);
    default:
      return createTheme(lightThemeOptions);
  }
};
