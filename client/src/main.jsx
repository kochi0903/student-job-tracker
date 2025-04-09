import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/route.jsx";

export const ThemeContext = React.createContext();

const Main = () => {
  const themes = [
    "lemonade",
    "cupcake",
    "forest",
    "aqua",
    "pastel",
    "dark",
  ];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const toggleTheme = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
        <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
