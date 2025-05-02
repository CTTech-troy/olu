import React from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <h1 className={`text-2xl font-serif font-bold ${isScrolled ? 'text-[#0A2647]' : 'text-white'}`}>
        Olu Junaid <span className="text-[#C5A572]">&</span> Company
      </h1>
      <Navigation isScrolled={isScrolled} />
      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-[#0A2647]' : 'text-white'}`}></i>
      </button>
    </div>
    <MobileMenu isOpen={mobileMenuOpen} />
  </header>
);

export default Header;