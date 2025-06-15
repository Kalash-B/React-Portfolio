import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
            <svg className="text-black md:font-bold md:text-[#ab7346]" width="40" height="44" viewBox="0 0 163 204" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5714 1L1 34.0862V203H33.8571C37.2857 203 37.1905 200.678 36.7143 199.517V149.017L31 154.241V115.931L49.5714 114.19L122.429 203H161L82.4286 107.224L161 9.7069H122.429L63.8571 81.1034H38.1429L31 93.2931V2.74138L29.5714 1Z" stroke="pink" strokeOpacity="0.9" strokeWidth="10"></path><path d="M1 203V34.0862L29.5714 1L31 2.74138V93.2931L38.1429 81.1034H63.8571L122.429 9.7069H161L82.4286 107.224L161 203H122.429L49.5714 114.19L31 115.931V154.241L36.7143 149.017V199.517C37.1905 200.678 37.2857 203 33.8571 203M1 203C10.5238 203 30.4286 203 33.8571 203M1 203H33.8571" stroke="url(#paint0_linear)" strokeWidth="10"></path><defs><linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse"><stop stopColor="blue"></stop><stop offset="1" stopColor="purple" stopOpacity="0"></stop></linearGradient></defs></svg>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group"
                  activeClass="nav-active"
                  spy={true}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg">
              <Download className="w-4 h-4" /> Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/80 backdrop-blur-sm ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-sm text-white pt-4 pb-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-pointer group"
              onClick={toggleMenu}
              activeClass="nav-active"
              spy={true}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg">
            <Download className="w-4 h-4" /> Resume
          </button>
        </div>
      </div>

      <style>{`
        .nav-active {
          color: white !important;
        }
        .nav-active span {
          width: 100% !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
