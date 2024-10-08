import React, { useState, useEffect } from "react";
import '../App.css'
import logo from '../images/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navigation-bar fixed w-full top-0 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 font-sans">
          <img src={logo}/>
        </div>

        {/* Menu */}
        <div className="social-menu flex items-center space-x-10">
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <a href="#home" className="text-gray-800 hover:text-blue-600 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-800 hover:text-blue-600 transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#departments" className="text-gray-800 hover:text-blue-600 transition duration-200">
                Departments
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-800 hover:text-blue-600 transition duration-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-200">
                Contacts
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="social flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <button className="text-gray-800 hover:text-blue-600 transition duration-200">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
