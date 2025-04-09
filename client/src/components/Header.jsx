import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="mb-8">
      <nav className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaBriefcase className="text-indigo-600 text-2xl mr-2" />
          <h1 className="text-xl font-semibold text-gray-800">JobTrack</h1>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Dashboard
          </Link>
          <Link to="/add-job" className="text-gray-600 hover:text-indigo-600">
            Add Job
          </Link>
          <Link to="/jobs" className="text-gray-600 hover:text-indigo-600">
            Applications
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
