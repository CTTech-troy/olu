import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Why Choose Us', path: '/why-us' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    // List of available paths (you can update this as needed)
    const availablePaths = ['/', '/about', '/services', '/why-us', '/contact'];
    
    if (availablePaths.includes(path)) {
      navigate(path);
      setMobileMenuOpen(false); // Close mobile menu after navigation
    } else {
      alert('This page is not available.');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#0A2647] py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <i className={`fas fa-arrow-left mr-3 ${isScrolled ? 'text-[#0A2647]' : 'text-white'}`}></i>
          <h1 className={`text-2xl font-serif font-bold ${isScrolled ? 'text-[#0A2647]' : 'text-white'}`}>
            Olu Junaid <span className="text-[#C5A572]">&</span> Company
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, path }) => (
            <span
              key={label}
              onClick={() => handleNavigation(path)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[#C5A572] transition-colors duration-300 cursor-pointer`}
            >
              {label}
            </span>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-[#0A2647]' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all ease-in-out duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map(({ label, path }) => (
              <span
                key={label}
                onClick={() => handleNavigation(path)}
                className="text-gray-700 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
