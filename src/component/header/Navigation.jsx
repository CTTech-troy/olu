import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ isScrolled }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // List of available paths
    const availablePaths = ['/', '/about', '/services', '/why-us', '/contact', '/meeting'];

    if (availablePaths.includes(path)) {
      navigate(path);
    } else {
      alert('This page is not available.');
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {[
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Why Choose Us', path: '/why-us' },
        { label: 'Contact', path: '/contact' },
      ].map(({ label, path }) => (
        <span
          key={label}
          onClick={() => handleNavigation(path)}
          className={`${
            isScrolled ? 'text-gray-700' : 'text-white'
          } hover:text-[#C5A572] transition-colors duration-300 cursor-pointer`}
        >
          {label}
        </span>
      ))}

      <button
        onClick={() => handleNavigation('/meeting')}
        className="bg-[#C5A572] text-white px-5 py-2 rounded-lg hover:bg-[#b3945f] transition-colors duration-300 shadow-md"
      >
        Schedule Consultation
      </button>
    </nav>
  );
};

export default Navigation;
