import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeContext } from "./main.jsx";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <Header />
      <main className="min-h-screen mx-auto px-4 py-2 font-primary">
        <Outlet />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3500,
        }}
      />
      <Footer />
    </>
  );
};

export default App;
